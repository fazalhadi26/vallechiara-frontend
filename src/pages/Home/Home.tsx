import styles from './Home.module.css';
import ProductSlider from '../../components/ProductSlider/ProductSlider';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <div className={styles.bgLayer} />

        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>PURE WELLNESS</span>
            <span>NATURALLY REFINED</span>
          </h1>
        </div>
      </section>
      
      {/* Product Slider accurately mapped to layout specifications */}
      <ProductSlider />
    </div>
  );
}
