import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import styles from './Shop.module.css';
import s1 from '../../assets/s-1.png';
import s2 from '../../assets/s-2.png';
import s3 from '../../assets/s-3.png';
import s4 from '../../assets/s-4.png';
import s5 from '../../assets/s-5.png';
import s6 from '../../assets/s-6.png';
import { useCart } from '../../context/CartContext';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

const shopData = [
  {
    categoryTitle: "Natural Spring water",
    logoColor: "blue",
    products: [
      {
        id: "n1",
        title: "Box of 24 x 0.33L (Natural)",
        price: 65.00,
        priceStr: "AED 65.00",
        subtitle: "Make Hydration a Ritual, Subscribe & Save",
        image: s1,
        isOutOfStock: false
      },
      {
        id: "n2",
        title: "Box of 24 x 0.5L (Natural)",
        price: 75.00,
        priceStr: "AED 75.00",
        subtitle: "Make Hydration a Ritual, Subscribe & Save",
        image: s2,
        isOutOfStock: false
      },
      {
        id: "n3",
        title: "Box of 12 x 1L (Natural)",
        price: 80.00,
        priceStr: "AED 80.00",
        subtitle: "Make Hydration a Ritual, Subscribe & Save",
        image: s3,
        isOutOfStock: true
      }
    ]
  },
  {
    categoryTitle: "Sparkling Spring water",
    logoColor: "green",
    products: [
      {
        id: "s1",
        title: "Box of 24 x 0.33L (Sparkling)",
        price: 75.00,
        priceStr: "AED 75.00",
        subtitle: "Elevate every sip, subscribe & save",
        image: s4,
        isOutOfStock: true
      },
      {
        id: "s2",
        title: "Box of 24 x 0.5L (Sparkling)",
        price: 85.00,
        priceStr: "AED 85.00",
        subtitle: "Elevate every sip, subscribe & save",
        image: s5,
        isOutOfStock: true
      },
      {
        id: "s3",
        title: "Box of 12 x 1L (Sparkling)",
        price: 90.00,
        priceStr: "AED 90.00",
        subtitle: "Elevate every sip, subscribe & save",
        image: s6,
        isOutOfStock: true
      }
    ]
  }
];

export default function Shop() {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const handleBuyNow = (product: any) => {
    if (product.isOutOfStock) return;
    addToCart({
      id: product.id,
      name: product.title,
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
    <div className={styles.shopContainer}>
      <div className={styles.shopWrapper}>
        {shopData.map((category, index) => (
          <div key={index} className={styles.categoryRow}>

            <div className={styles.categoryHeader}>
              <h2 className={`${styles.categoryTitle} ${category.logoColor === "green" ? styles.greenText : styles.blueText}`}>
                {category.categoryTitle.split(" ").map((word, i) => (
                  <span key={i} className={styles.titleWord}>{word}</span>
                ))}
              </h2>
              <div className={`${styles.categoryVLogo} ${styles[category.logoColor]}`}>V</div>
            </div>

            <div className={styles.productsGrid}>
              {category.products.map(product => {
                const cartItem = getCartItem(product.id);
                const isInCart = !!cartItem;

                return (
                  <div key={product.id} className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <img src={product.image} alt={product.title} className={styles.bottleImg} />
                      <div className={styles.shadowBase} />
                    </div>

                    <div className={styles.contentWrapper}>
                      <div className={styles.badgeWrap}>
                        {product.isOutOfStock && (
                          <span className={styles.outOfStockBadge}>OUT OF STOCK</span>
                        )}
                      </div>

                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <div className={styles.productPrice}>{product.priceStr}</div>
                      <p className={styles.productSubtitle}>{product.subtitle}</p>

                      <div className={`${styles.actions} ${product.isOutOfStock ? styles.disabledActions : ''}`}>
                        {!isInCart ? (
                          <button className={styles.buyNowBtn} onClick={() => handleBuyNow(product)}>BUY NOW</button>
                        ) : (
                          <div 
                            className={`${styles.cartActionWrapper} ${hoveredProductId === product.id ? styles.isExpanded : ''}`}
                            onMouseEnter={() => setHoveredProductId(product.id)}
                            onMouseLeave={() => setHoveredProductId(null)}
                          >
                            <div className={styles.iconLayer}>
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cartIcon}>
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
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
                        <button className={styles.subscribeBtn}>SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={confirmRemove}
        title="Remove Item"
        message="Do you want to remove this item from your cart selection?"
        confirmLabel="Yes"
        cancelLabel="Cancel"
      />
    </div>
  );
}

