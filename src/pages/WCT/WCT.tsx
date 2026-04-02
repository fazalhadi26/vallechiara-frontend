import { useEffect } from 'react';
import styles from './WCT.module.css';
import bannerImage from '../../assets/twc-images/wct-banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WCT() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div className={styles.pageWrapper}>

      {/* HERO BANNER */}
      <section className={styles.heroSection}>
        <img
          src={bannerImage}
          alt="Water Conservation Trust"
          className={styles.heroBgImage}
        />

        {/* Overlay for readability */}
        <div className={styles.heroOverlay} />

        {/* Content */}
        <div className={styles.heroContent}>
          <h1
            className={styles.heroTitle}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            TRACK YOUR HYDRATION,<br />
            EFFORTLESSLY
          </h1>
          <p
            className={styles.heroSubtitle}
            data-aos="fade-up"
            data-aos-delay="550"
            data-aos-duration="1000"
          >
            Designed to complement your Vallechiara experience, our Water Consumption Tracker
            helps you and your family stay perfectly hydrated, every day. Set personalized goals,
            monitor your daily water intake, and discover how consistent hydration enhances wellness,
            energy, and focus. Hydration made simple. Wellness made effortless.
          </p>
          <a
            href="#"
            className={styles.heroBtn}
            aria-label="Get Started Now with WCT"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            GET STARTED NOW
          </a>
        </div>
      </section>

    </div>
  );
}
