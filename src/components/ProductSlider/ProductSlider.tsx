import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useDisclosure } from '@chakra-ui/react';
import { useCart } from '../../context/CartContext';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

import styles from './ProductSlider.module.css';
import bottleImg1 from '../../assets/home-page-images/bottle-img-1.png';
import bottleImg2 from '../../assets/home-page-images/bottle-img-2.png';
import bottleImg3 from '../../assets/home-page-images/bottle-img-3.png';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'box-033',
    name: 'Box of 24 x 0.33L (Natural)',
    description: "Embrace nature's pure hydration with our 330 ML bottles - the perfect choice for the workplace, events, or home use. Experience revitalization in every zip. wherever you are.",
    price: 65.00,
    priceStr: 'AED 65.00',
    image: bottleImg1,
  },
  {
    id: 'box-05L',
    name: 'Box of 24 x 0.5L (Natural)',
    description: "Perfect for active lifestyles, our 500 ML bottle offers pure hydration on the go. Sustainably crafted for you to enjoy Vallechiara's pristine water anywhere.",
    price: 75.00,
    priceStr: 'AED 75.00',
    image: bottleImg2,
  },
  {
    id: 'box-1L',
    name: 'Box of 12 x 1L (Natural)',
    description: "Bring the purity of Vallechiara to your family table. Our 1 liter bottle ensures everyone stays hydrated beautifully with an elegant presentation.",
    price: 80.00,
    priceStr: 'AED 80.00',
    image: bottleImg3,
  }
];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  // Animation variants for sequential reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const handleBuyNow = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  const getCartItem = (id: string) => {
    return cartItems.find(item => item.id === id);
  };

  const handleDecreaseQuantity = (id: string, currentQty: number) => {
    if (currentQty === 1) {
      setSelectedItemId(id);
      onOpen();
    } else {
      updateQuantity(id, -1);
    }
  };

  const confirmRemove = () => {
    if (selectedItemId) {
      removeFromCart(selectedItemId);
      setSelectedItemId(null);
      onClose();
    }
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>

        {/* Navigation Arrows placed outside main central layout */}
        <button className={`custom-prev ${styles.navBtn} ${styles.prevBtn}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          slidesPerView={1}
          loop={true}
          speed={600}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
          className={styles.swiperWrapper}
        >
          {products.map((product) => {
            const cartItem = getCartItem(product.id);
            const isInCart = !!cartItem;

            return (
              <SwiperSlide key={product.id} className={styles.swiperSlide}>
                <div className={styles.slideContentWrapper}>

                  {/* Left side: Image presentation */}
                  <div className={styles.imageColumn}>
                    <img src={product.image} alt={product.name} className={styles.bottleImg} />
                    <div className={styles.shadowBase} />
                  </div>

                  {/* Right side: Informational Text Data */}
                  <motion.div 
                    className={styles.textColumn}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.h2 variants={itemVariants} className={styles.productName}>
                      {product.name}
                    </motion.h2>
                    
                    <motion.p variants={itemVariants} className={styles.productDescription}>
                      {product.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.priceContainer}>
                      <span className={styles.priceLabel}>Starts from</span>
                      <span className={styles.priceValue}>{product.priceStr}</span>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className={`${styles.actionsBlock} ${isInCart ? styles.hasCartItem : ''} ${hoveredProductId === product.id ? styles.isExpanded : ''}`}
                    >
                      <button className={styles.subscribeBtn}>SUBSCRIBE</button>

                      {!isInCart ? (
                        <button className={styles.buyNowBtn} onClick={() => handleBuyNow(product)}>
                          BUY NOW
                        </button>
                      ) : (
                        <div
                          className={styles.cartActionWrapper}
                          onMouseEnter={() => setHoveredProductId(product.id)}
                          onMouseLeave={() => setHoveredProductId(null)}
                        >
                          <div className={styles.iconLayer}>
                            <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H1.3673C2.72645 1 3.9158 1.91375 4.266 3.22701L7.34426 14.7705C7.49727 15.2295 8.07869 16.1475 9.18033 16.1475C10.282 16.1475 18.8197 16.1475 22.9508 16.1475C23.4098 16.1475 24.4197 15.8721 24.7869 14.7705C25.1541 13.6689 27.082 6.6612 28 3.29508" stroke="white" stroke-width="2"></path><circle cx="11.0162" cy="19.3605" r="1.83607" fill="white"></circle><circle cx="21.1149" cy="19.3605" r="1.83607" fill="white"></circle></svg>
                            <span className={styles.iconBadge}>{cartItem.quantity}</span>
                          </div>

                          <div className={styles.qtyLayer}>
                            <button
                              className={styles.qtyBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDecreaseQuantity(product.id, cartItem.quantity);
                              }}
                            >
                              {cartItem.quantity === 1 ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                              ) : (
                                <>&#8722;</>
                              )}
                            </button>
                            <span className={styles.qtyValue}>{cartItem.quantity}</span>
                            <button
                              className={styles.qtyBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(product.id, 1);
                              }}
                            >
                              &#43;
                            </button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button className={`custom-next ${styles.navBtn} ${styles.nextBtn}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>

      </div>

      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBarBg}>
          <div
            className={styles.progressBarFill}
            style={{
              width: `${(100 / products.length)}%`,
              transform: `translateX(${activeIndex * 100}%)`
            }}
          ></div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={confirmRemove}
        title="Remove Item"
        message="Do you want to remove this item from your selection?"
        confirmLabel="Yes"
        cancelLabel="Cancel"
      />
    </section>
  );
}
