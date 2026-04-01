import styles from './WCT.module.css';
import bannerImage from '../../assets/twc-images/wct-banner.png';

export default function WCT() {
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
          <h1 className={styles.heroTitle}>
            TRACK YOUR HYDRATION,<br />
            EFFORTLESSLY
          </h1>
          <p className={styles.heroSubtitle}>
            Designed to complement your Vallechiara experience, our Water Consumption Tracker
            helps you and your family stay perfectly hydrated, every day. Set personalized goals,
            monitor your daily water intake, and discover how consistent hydration enhances wellness,
            energy, and focus. Hydration made simple. Wellness made effortless.
          </p>
          <a
            href="#"
            className={styles.heroBtn}
            aria-label="Get Started Now with WCT"
          >
            GET STARTED NOW
          </a>
        </div>
      </section>

    </div>
  );
}
