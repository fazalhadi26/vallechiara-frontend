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

      <section className={styles.sliderIntroSection}>
        <h2 className={styles.sliderIntroTitle}>DISCOVER YOUR PERFECT BOTTLE</h2>
        <p className={styles.sliderIntroSubtitle}>
          Every lifestyle deserves its perfect rhythm of hydration. Explore Vallechiara's collection, bottled at the source, designed for every moment of your day.
        </p>
      </section>
      
      {/* Product Slider accurately mapped to layout specifications */}
      <ProductSlider />
    </div>
  );
}
