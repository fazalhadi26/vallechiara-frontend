import styles from './Home.module.css';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import storyBg from '../../assets/w-1.webp';
import leafLeft from '../../assets/w-2.png';
import leafRight from '../../assets/w-3.webp';
import bottle02 from '../../assets/bottle-02.webp';
import bottle03 from '../../assets/bottle-03.png';
import womanClass from '../../assets/home-page-images/woman-with-class.png';
import { useNavigate } from 'react-router-dom';
import AllBlogs from '../../components/AllBlogs/AllBlogs';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
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

      <section
        className={styles.storySection}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.storyContainer}>

          <div className={styles.storyImageColumn}>
            <div className={styles.archImageWrapper}>
              <img src={storyBg} alt="Vallechiara Source" className={styles.archImage} />
              <img
                src={leafLeft}
                alt="Leaf Decor"
                className={styles.floralLeft}
                style={{
                  transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 30}px)`
                }}
              />
              <img
                src={leafRight}
                alt="Leaf Decor"
                className={styles.floralRight}
                style={{
                  transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -30}px)`
                }}
              />
            </div>
          </div>

          <div className={styles.storyTextColumn}>
            <span
              className={styles.storySubhead}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              THE STORY BEHIND EVERY DROP
            </span>
            <h2
              className={styles.storyTitle}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              NATURE'S PUREST<br />ESSENCE
            </h2>
            <p
              className={styles.storyText}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              From pristine springs to your table, Vallechiara's journey is one of rebirth and devotion to purity. A legacy that began in the Italian Alps continues today, blending heritage, innovation, and a shared respect for nature.
            </p>
            <button
              onClick={() => navigate("/our-story")}
              className={styles.readMoreBtn}
              data-aos="fade-up"
              data-aos-delay="450"
            >
              READ MORE
            </button>
          </div>

        </div>
      </section>

      <section className={styles.lightnessSection}>
        <div className={styles.lightnessLeft}>
          <img
            src={bottle03}
            alt="Vallechiara Bottle Main"
            className={`${styles.lightnessBottle} ${styles.bottleMain}`}
          />
          <img
            src={bottle02}
            alt="Vallechiara Bottle Top"
            className={`${styles.lightnessBottle} ${styles.bottleBottom}`}
          />
          <img
            src={bottle03}
            alt="Vallechiara Bottle Bottom"
            className={`${styles.lightnessBottle} ${styles.bottleTop}`}
          />


        </div>

        <div className={styles.lightnessCenter}>
          <h2 className={styles.lightnessTitle}>LIGHTNESS<br />PERSONIFIED</h2>
          <p className={styles.lightnessText}>
            Born in the untouched Italian Alps, Vallechiara is water at its purest, light on the palate, balanced in every drop, and crafted by nature to refresh body and soul.
          </p>
        </div>

        <div className={styles.lightnessRight}>
          <img
            src={womanClass}
            alt="Refreshing Lifestyle"
            className={styles.lightnessLifestyle}
          />
        </div>
      </section>

      <AllBlogs />

    </div>
  );
}
