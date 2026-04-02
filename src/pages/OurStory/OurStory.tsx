import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './OurStory.module.css';
import story1 from '../../assets/our-story-images/story-1.webp';
import story2 from '../../assets/our-story-images/story-2.webp';
import story3 from '../../assets/our-story-images/story-3.webp';
import story4 from '../../assets/our-story-images/story-4.webp';
import storyLeft from '../../assets/our-story-images/story-left.png';
import storyRight from '../../assets/our-story-images/story-right.webp';

export default function OurStory() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      className={styles.pageWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <nav className={styles.breadcrumbs}>
        <Link to="/">Home</Link> | <span className={styles.breadcrumbsTitle}>Our Story</span>
      </nav>
      <header 
        className={styles.heroSection}
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <h1 className={styles.mainTitle}>Our Story</h1>
      </header>

      {/* Section 1: Heritage */}
      <section className={`${styles.storySection} ${styles.tealSection}`}>
        <div className={styles.container}>
          <div 
            className={styles.imageWrapper}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className={styles.archContainer}>
              <img src={story1} alt="A Heritage of Purity" className={styles.storyImage} />
            </div>
            <img 
              src={storyLeft} 
              alt="Decoration" 
              className={styles.accentLeft} 
              style={{
                transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 30}px)`
              }}
            />
            <img 
              src={storyRight} 
              alt="Decoration" 
              className={styles.accentRight} 
              style={{
                transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -30}px)`
              }}
            />
          </div>
          <div 
            className={styles.contentWrapper}
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2 className={styles.sectionHeading}>A HERITAGE OF PURITY: SINCE 950 A.D.</h2>
            <div className={styles.textBlock}>
              <p>
                Our story begins in the tranquil hills of the Maritime Alps, where our crystal springs first emerged from ancient rock amidst the untouched forests of Savona.
              </p>
              <p>
                Recognized for its extraordinary properties as early as 950 A.D. by King Berengar II and later by Holy Roman Emperor Otto the Great, the spring became a prized jewel of the Empire. For centuries, this "noble water" was passed through prominent dynasties and royal fiefdoms—from the Holy Roman Empire to the Kingdom of Italy—valued throughout history for its restorative benefits.
              </p>
              <p>
                Officially established as a source of excellence in 1833, Vallechiara remains one of Italy's lightest waters. With a remarkably low TDS of 34.1 mg/l and minimal sodium, it is celebrated today as a premier detoxifying mineral water. From being awarded Italian Health Ministry certification for infant nutrition to being ranked among the best Italian mineral waters by Gambero Rosso, Vallechiara continues a millennium-long legacy of bringing health, history, and sophisticated taste to the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Natural Haven */}
      <section className={`${styles.storySection} ${styles.whiteSection}`}>
        <div className={styles.container}>
          <div 
            className={styles.imageWrapper}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className={styles.archContainer}>
              <img src={story2} alt="Natural Haven" className={styles.storyImage} />
            </div>
            <img 
              src={storyLeft} 
              alt="Decoration" 
              className={styles.accentLeft} 
              style={{
                transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 30}px)`
              }}
            />
            <img 
              src={storyRight} 
              alt="Decoration" 
              className={styles.accentRight} 
              style={{
                transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -30}px)`
              }}
            />
          </div>
          <div 
            className={styles.contentWrapper}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className={styles.sectionHeading}>NATURAL HAVEN : LIPIANI, ALTARE : NATURE'S SANCTUARY, OUR SACRED RESPONSIBILITY</h2>
            <div className={styles.textBlock}>
              <p>
                Nestled amid more than two million square meters of beech and chestnut trees in Lipiani, Altare, our source exists in perfect balance with its natural surroundings, a sanctuary where the rhythm of nature shapes the essence of every drop.
              </p>
              <p>
                Revived under the vision of a distinguished Emirati Group, Vallechiara continues to honor its heritage with a renewed spirit of innovation and sustainability. More than water, it is a symbol of purity, elegance, and wellbeing, crafted to nourish both body and soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Purity Embodied */}
      <section className={`${styles.storySection} ${styles.tealSection}`}>
        <div className={styles.container}>
          <div 
            className={styles.imageWrapper}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className={styles.archContainer}>
              <img src={story3} alt="Purity Embodied" className={styles.storyImage} />
            </div>
            <img 
              src={storyLeft} 
              alt="Decoration" 
              className={styles.accentLeft} 
              style={{
                transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 30}px)`
              }}
            />
            <img 
              src={storyRight} 
              alt="Decoration" 
              className={styles.accentRight} 
              style={{
                transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -30}px)`
              }}
            />
          </div>
          <div 
            className={styles.contentWrapper}
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2 className={styles.sectionHeading}>PURITY EMBODIED: UNTOUCHED, UNMATCHED, UNEQUALED</h2>
            <div className={styles.textBlock}>
              <p>
                From the Italian Alps, Vallechiara water travels through mineral-rich stone, emerging naturally low in sodium and perfectly balanced. Bottled at its source, it preserves the purity and lightness that define Italy's most pristine waters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Elevating Wellness */}
      <section className={`${styles.storySection} ${styles.tealSection}`}>
        <div className={styles.container}>
          <div 
            className={styles.imageWrapper}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className={styles.archContainer}>
              <img src={story4} alt="Elevating Wellness" className={styles.storyImage} />
            </div>
            <img 
              src={storyLeft} 
              alt="Decoration" 
              className={styles.accentLeft} 
              style={{
                transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 30}px)`
              }}
            />
            <img 
              src={storyRight} 
              alt="Decoration" 
              className={styles.accentRight} 
              style={{
                transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -30}px)`
              }}
            />
          </div>
          <div 
            className={styles.contentWrapper}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className={styles.sectionHeading}>ELEVATING WELLNESS: PURE HYDRATION, THE ITALIAN WAY</h2>
            <div className={styles.textBlock}>
              <p>
                Naturally composed, never engineered, Vallechiara embodies the Italian art of living well. Each sip reflects simplicity, balance, and purity, transforming hydration into a quiet daily ritual of wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
