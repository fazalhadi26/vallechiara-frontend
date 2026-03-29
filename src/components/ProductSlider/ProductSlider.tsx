import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ProductSlider.module.css';
import bottleImg from '../../assets/bootle1.png';

const products = [
  {
    id: 'box-033',
    name: 'Box of 24 x 0.33L (Natural)',
    description: "Embrace nature's pure hydration with our 330 ML bottles - the perfect choice for the workplace, events, or home use. Experience revitalization in every zip. wherever you are.",
    price: 65.00,
    priceStr: 'AED 65.00',
    image: bottleImg,
  },
  {
    id: 'box-05L',
    name: 'Box of 24 x 0.5L (Natural)',
    description: "Perfect for active lifestyles, our 500 ML bottle offers pure hydration on the go. Sustainably crafted for you to enjoy Vallechiara's pristine water anywhere.",
    price: 75.00,
    priceStr: 'AED 75.00',
    image: bottleImg,
  },
  {
    id: 'box-1L',
    name: 'Box of 12 x 1L (Natural)',
    description: "Bring the purity of Vallechiara to your family table. Our 1 liter bottle ensures everyone stays hydrated beautifully with an elegant presentation.",
    price: 80.00,
    priceStr: 'AED 80.00',
    image: bottleImg,
  }
];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    // navigate('/cart'); // Removed redirection
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        
        {/* Navigation Arrows placed outside main central layout */}
        <button className={`custom-prev ${styles.navBtn} ${styles.prevBtn}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
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
          {products.map((product) => (
            <SwiperSlide key={product.id} className={styles.swiperSlide}>
              <div className={styles.slideContentWrapper}>
                
                {/* Left side: Image presentation */}
                <div className={styles.imageColumn}>
                  <img src={product.image} alt={product.name} className={styles.bottleImg} />
                  <div className={styles.shadowBase} />
                </div>

                {/* Right side: Informational Text Data */}
                <div className={styles.textColumn}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                  
                  <div className={styles.priceContainer}>
                    <span className={styles.priceLabel}>Starts from</span>
                    <span className={styles.priceValue}>{product.priceStr}</span>
                  </div>

                  <div className={styles.actionsBlock}>
                    <button className={styles.subscribeBtn}>SUBSCRIBE</button>
                    <button className={styles.buyNowBtn} onClick={() => handleBuyNow(product)}>BUY NOW</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button className={`custom-next ${styles.navBtn} ${styles.nextBtn}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

      </div>

      {/* Synchronized Exact Progress Bar Mapping */}
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
    </section>
  );
}
