import { Link } from 'react-router-dom';
import styles from './InsideTheSource.module.css';
import source1 from '../../assets/our-sourse-images/soure-img-1.webp';
import source2 from '../../assets/our-sourse-images/soure-img-2.webp';
import source3 from '../../assets/our-sourse-images/soure-img-3.webp';
import source4 from '../../assets/our-sourse-images/soure-img-4.webp';
import source5 from '../../assets/our-sourse-images/soure-img-5.webp';
import storyLeft from '../../assets/our-sourse-images/story-left.png';
import storyRight from '../../assets/our-sourse-images/story-right.webp';

export default function InsideTheSource() {
  return (
    <div className={styles.pageWrapper}>
      <nav className={styles.breadcrumbs}>
        <Link to="/">Home</Link> | <span className={styles.breadcrumbsTitle}>Inside the Source</span>
      </nav>
      <header className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Inside the Source</h1>
      </header>

      {/* Section 1: How we bottle purity */}
      <section className={`${styles.sourceSection} ${styles.tealSection}`}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <div className={styles.archContainer}>
              <img src={source1} alt="Bottle Purity" className={styles.sourceImage} />
            </div>
            <img src={storyLeft} alt="Decoration" className={styles.accentLeft} />
            <img src={storyRight} alt="Decoration" className={styles.accentRight} />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.sectionHeading}>HOW WE BOTTLE PURITY</h2>
            <div className={styles.textBlock}>
              <p>
                Every drop of Vallechiara tells a story of precision, where nature's perfection meets human craftsmanship. At our renewed Altare facility, technology works silently to protect what nature has already perfected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mineral Analysis Table */}
      <section className={`${styles.sourceSection} ${styles.whiteSection}`}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <div className={styles.archContainer}>
              <img src={source2} alt="Purity preserved" className={styles.sourceImage} />
            </div>
            <img src={storyLeft} alt="Decoration" className={styles.accentLeft} />
            <img src={storyRight} alt="Decoration" className={styles.accentRight} />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.sectionHeading}>PURE BY NATURE, PRESERVED BY DESIGN</h2>
            <p className={styles.textBlock}>
              Vallechiara water is bottled directly at the source, untouched by additives or treatments. Our systems ensure that its natural balance, low sodium, pH 6.6, rich in essential minerals, remains exactly as it flows from the spring. We don't alter purity; we preserve it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Source Map */}
      <section className={`${styles.sourceSection} ${styles.tealSection}`}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <div className={styles.archContainer}>
              <img src={source3} alt="Source Map" className={styles.sourceImage} />
            </div>
            <img src={storyLeft} alt="Decoration" className={styles.accentLeft} />
            <img src={storyRight} alt="Decoration" className={styles.accentRight} />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.sectionHeading}>EXPLORE THE SOURCE MAP</h2>
            <div className={styles.textBlock}>
              <p>
                Our network of five springs across Lipiani forms the foundation of our sustainability vision. Strategically located near our bottling site, these sources allow efficient production with minimal transport emissions, reducing CO2 output while respecting the forest ecosystems that protect our water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Precision */}
      <section className={`${styles.sourceSection} ${styles.whiteSection}`}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <div className={styles.archContainer}>
              <img src={source4} alt="Precision bottling" className={styles.sourceImage} />
            </div>
            <img src={storyLeft} alt="Decoration" className={styles.accentLeft} />
            <img src={storyRight} alt="Decoration" className={styles.accentRight} />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.sectionHeading}>CRAFTED WITH PRECISION</h2>
            <div className={styles.textBlock}>
              <p>
                Inside our modernized plant, every bottle passes through ISO-certified quality controls and energy-efficient DNV-certified lines. We use clean energy exclusively, no fossil fuels, and continuously monitor each batch to ensure purity, consistency, and traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Sustainability */}
      <section className={`${styles.sourceSection} ${styles.tealSection}`}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <div className={styles.archContainer}>
              <img src={source5} alt="Sustainability" className={styles.sourceImage} />
            </div>
            <img src={storyLeft} alt="Decoration" className={styles.accentLeft} />
            <img src={storyRight} alt="Decoration" className={styles.accentRight} />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.sectionHeading}>SUSTAINABILITY IN MOTION</h2>
            <div className={styles.textBlock}>
              <p>
                From 100% recyclable PET bottles and cartons enriched with high-recycled content, to smart resource management, every stage of Vallechiara's process reflects our long-term promise: to safeguard purity without compromising the planet that gives it to us. Sustainably bottled. Responsibly delivered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
