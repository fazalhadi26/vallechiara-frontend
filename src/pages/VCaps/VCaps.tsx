import styles from './VCaps.module.css';
import bannerImage from '../../assets/footer-images/caps-images.png';

const VCaps = () => {
  return (
    <div className={styles.pageWrapper}>

      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              V CAPS REWARD <br /> PROGRAM
            </h1>
            <p className={styles.heroSubtitle}>
              Collect V-caps and benefit from weekly fascinating offers
            </p>
          </div>

          <div className={styles.heroImageWrapper}>
            <img src={bannerImage} alt="V Caps Rewards" />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* HOW IT WORKS */}
          <div className={styles.mainHeadingWrapper}>
            <h2 className={styles.mainHeading}><strong>HOW IT WORKS</strong></h2>
            <p className={styles.headingMotto}>
              Simple. Seamless. Rewarding.
            </p>
          </div>

          <p className={styles.introText}>
            Earn V Caps every time you subscribe, order, or take part in Vallechiara's activities.<br />
            Your loyalty translates into points, and your points open the door to exciting weekly draws
            and exclusive lifestyle rewards.
          </p>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Ways to Earn V Caps:</h3>
            <ol className={styles.orderedList}>
              <li>Subscribing to Vallechiara plans</li>
              <li>Ordering as a subscriber</li>
              <li>Referrals</li>
              <li>Participating in marketing campaigns and events</li>
              <li>Receiving V Caps as a gift</li>
            </ol>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Bonus for Subscriptions:</h3>
            <ul className={styles.list}>
              <li>1-month plan → +50 V Caps</li>
              <li>3-month plan → +100 V Caps</li>
              <li>6-month plan → +200 V Caps</li>
            </ul>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Purchase Rewards:</h3>
            <ul className={styles.list}>
              <li>Spend AED 100–999 → 10 V Caps per 100 AED</li>
              <li>Spend AED 1,000+ → 20 V Caps per 100 AED</li>
            </ul>
          </div>

          {/* REWARDING */}
          <div className={styles.sectionDivider}>
            <h2 className={styles.mainHeading}>REWARDING MECHANISM</h2>
            <p className={styles.headingMotto}>
              Weekly Draws, Continuous Rewards
            </p>
          </div>

          <div className={styles.detailedContent}>
            <p className={styles.paragraph}>
              Your earned V Caps automatically qualify you for weekly draws.
            </p>
            <ul className={styles.list}>
              <li>70–990 V Caps = 1 ticket</li>
              <li>1,000+ V Caps = 4 tickets</li>
            </ul>
            <p className={styles.paragraph}>
              Winners are announced weekly and excluded from the next draw.
            </p>
          </div>

          {/* REDEMPTION */}
          <div className={styles.sectionDivider}>
            <h2 className={styles.mainHeading}>REDEMPTION OPTIONS</h2>
            <p className={styles.headingMotto}>
              Turn Points into Privileges
            </p>
          </div>

          <div className={styles.detailedContent}>
            <p className={styles.paragraph}>
              Use your V Caps to redeem rewards or premium experiences.
            </p>
            <ul className={styles.list}>
              <li><strong>Direct Redemption:</strong> Gifts & boxes</li>
              <li><strong>Balance-On-Us:</strong> Combine with payment</li>
            </ul>
            <p className={styles.exampleText}>
              Example: AED 1,500 → pay AED 1,100 + 400 V Caps
            </p>
          </div>

          {/* WHY */}
          <div className={styles.sectionDivider}>
            <h2 className={styles.mainHeading}>WHY IT MATTERS</h2>
          </div>

          <p className={styles.paragraph}>
            Because wellness is a lifestyle. Vallechiara rewards your consistency.
          </p>

        </div>
      </section>

    </div>
  );
};

export default VCaps;