import styles from './Home.module.css';
import bottleImg from '../../assets/bootle1.png';
import ProductSlider from '../../components/ProductSlider/ProductSlider';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <div className={styles.bgLayer}></div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>PURE WELLNESS,</span>
            <span>NATURALLY REFINED</span>
          </h1>
        </div>

        <div className={styles.bottomLogo}>
          <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
            <path d="M12 21L3 4h5.5L12 14.5 15.5 4H21z" />
          </svg>
        </div>

        <div className={styles.bottleContainer}>
          <img src={bottleImg} alt="Vallechiara Spring Water" className={styles.bottleImage} />
        </div>
      </section>
      
      {/* Product Slider matches products.png */}
      <ProductSlider />
    </div>
  );
}
