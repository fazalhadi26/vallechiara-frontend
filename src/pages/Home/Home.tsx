import styles from './Home.module.css';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import storyBg from '../../assets/w-1.webp';

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
              <svg className={styles.floralLeft} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 100C40 80 20 60 0 50C30 50 45 30 50 0C55 30 70 50 100 50C80 60 60 80 50 100Z" fill="white"/>
              </svg>
              <svg className={styles.floralRight} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 100C40 80 20 60 0 50C30 50 45 30 50 0C55 30 70 50 100 50C80 60 60 80 50 100Z" fill="white"/>
              </svg>
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
