import styles from './Home.module.css';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import storyBg from '../../assets/w-1.webp';
import leafLeft from '../../assets/w-2.png';
import leafRight from '../../assets/w-3.webp';

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

      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          
          <div className={styles.storyImageColumn}>
            <div className={styles.archImageWrapper}>
              <img src={storyBg} alt="Vallechiara Source" className={styles.archImage} />
              <img src={leafLeft} alt="Leaf Decor" className={styles.floralLeft} />
              <img src={leafRight} alt="Leaf Decor" className={styles.floralRight} />
            </div>
          </div>

          <div className={styles.storyTextColumn}>
            <span className={styles.storySubhead}>THE STORY BEHIND EVERY DROP</span>
            <h2 className={styles.storyTitle}>NATURE'S PUREST<br/>ESSENCE</h2>
            <p className={styles.storyText}>
              From pristine springs to your table, Vallechiara's journey is one of rebirth and devotion to purity. A legacy that began in the Italian Alps continues today, blending heritage, innovation, and a shared respect for nature.
            </p>
            <button className={styles.readMoreBtn}>READ MORE</button>
          </div>

        </div>
      </section>

    </div>
  );
}
