import styles from './Shop.module.css';
import s1 from '../../assets/s-1.png';
import s2 from '../../assets/s-2.png';
import s3 from '../../assets/s-3.png';
import s4 from '../../assets/s-4.png';
import s5 from '../../assets/s-5.png';
import s6 from '../../assets/s-6.png';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

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
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (product: any) => {
    if (product.isOutOfStock) return;
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    navigate('/cart');
  };

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopWrapper}>
        {shopData.map((category, index) => (
          <div key={index} className={styles.categoryRow}>
            
            {/* Sticky Left Column Category Heading */}
            <div className={styles.categoryHeader}>
              <h2 className={`${styles.categoryTitle} ${category.logoColor === "green" ? styles.greenText : styles.blueText}`}>
                {category.categoryTitle.split(" ").map((word, i) => (
                  <span key={i} className={styles.titleWord}>{word}</span>
                ))}
              </h2>
              <div className={`${styles.categoryVLogo} ${styles[category.logoColor]}`}>V</div>
            </div>

            {/* Horizontal 3-Column Array Feed */}
            <div className={styles.productsGrid}>
              {category.products.map(product => (
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
                      <button className={styles.buyNowBtn} onClick={() => handleBuyNow(product)}>BUY NOW</button>
                      <button className={styles.subscribeBtn}>SUBSCRIBE</button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

