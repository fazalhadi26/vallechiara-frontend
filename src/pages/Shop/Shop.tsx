import styles from './Shop.module.css';

export default function Shop() {
  return (
    <div className={styles.shopContainer}>
      <div className={styles.banner}>
        <h1>Shop Vallechiara</h1>
        <p>Browse our premium collection of Italian spring water.</p>
      </div>
      
      <div className={styles.productsGrid}>
        <div className={styles.productPlaceholder}>
          <h3>V WATER 330 ML</h3>
          <p>Coming Soon</p>
        </div>
        <div className={styles.productPlaceholder}>
          <h3>V WATER 500 ML</h3>
          <p>Coming Soon</p>
        </div>
        <div className={styles.productPlaceholder}>
          <h3>V WATER 1 LITER</h3>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
