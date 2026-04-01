
import styles from './VCaps.module.css';
import bannerImage from '../../assets/footer-images/caps-images.png'; // Your hero image

const VCaps = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Banner */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              V CAPS REWARD<br />PROGRAM
            </h1>
            <p className={styles.heroSubtitle}>
              Collect V-caps and benefit from weekly fascinating offers
            </p>
          </div>

          <div className={styles.heroImageWrapper}>
            <img
              src={bannerImage}
              alt="V Caps Rewards Program"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* How It Works */}
          <div className={styles.mainHeadingWrapper}>
            <h2 className={styles.mainHeading}>HOW IT WORKS</h2>
            <p className={styles.headingMotto}>SIMPLE. SEAMLESS. REWARDING.</p>
          </div>

          <div className={styles.introText}>
            <p>
              Earn V Caps every time you subscribe, order, or take part in Vallechiara's activities.
              Your loyalty translates into points, and your points open the door to exciting weekly draws
              and exclusive lifestyle rewards.
            </p>
          </div>

          {/* Ways to Earn */}
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

          {/* Bonus for Subscriptions */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Bonus for Subscriptions:</h3>
            <ul className={styles.list}>
              <li>1-month plan → <strong>+50 V Caps</strong></li>
              <li>3-month plan → <strong>+100 V Caps</strong></li>
              <li>6-month plan → <strong>+200 V Caps</strong></li>
            </ul>
          </div>

          {/* Purchase Rewards */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Purchase Rewards:</h3>
            <ul className={styles.list}>
              <li>Spend AED 100-999 → <strong>10 V Caps per 100 AED</strong></li>
              <li>Spend AED 1,000 and above → <strong>20 V Caps per 100 AED</strong></li>
            </ul>
          </div>

          {/* Rewarding Mechanism */}
          <div className={styles.sectionDivider}>
            <h2 className={styles.mainHeading}>REWARDING MECHANISM</h2>
            <p className={styles.headingMotto}>Weekly Draws, Continuous Rewards</p>
          </div>

          <div className={styles.detailedContent}>
            <p className={styles.paragraph}>
              Your earned V Caps automatically qualify you for weekly draws, exclusively for active subscribers.
            </p>
            <ul className={styles.list}>
              <li><strong>70-990 V Caps</strong> = 1 ticket</li>
              <li><strong>1,000 V Caps and above</strong> = 4 tickets</li>
            </ul>
            <p className={styles.paragraph}>
              Winners are announced weekly and will be excluded from the next draw to ensure equal chances for all.
              Draw participation does not reduce your V Caps balance, so your points continue to grow.
            </p>
          </div>

          {/* Redemption Options */}
          <div className={styles.sectionDivider}>
            <h2 className={styles.mainHeading}>REDEMPTION OPTIONS</h2>
            <p className={styles.headingMotto}>Turn Points into Privileges</p>
          </div>

          <div className={styles.detailedContent}>
            <p className={styles.paragraph}>
              Use your V Caps to redeem rewards directly or save them toward premium experiences:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Direct Redemption:</strong> Exchange V Caps for Vallechiara boxes, gifts, and curated items.
              </li>
              <li>
                <strong>Balance-On-Us:</strong> Combine your points with partial payment for larger offers,
                such as furniture, wellness stays, or premium lifestyle experiences.
              </li>
            </ul>
            <p className={styles.exampleText}>
              Example: a AED 1,500 driving course → pay AED 1,100 + 400 V Caps.
            </p>
          </div>

          {/* Why It Matters */}
          <div className={styles.sectionDivider}>
            <h2 className={styles.mainHeading}>WHY IT MATTERS</h2>
          </div>

          <div className={styles.detailedContent}>
            <p className={styles.paragraph}>
              Because wellness isn’t a one-time choice, it’s a way of life.<br />
              With V Caps, Vallechiara thanks you for making pure hydration part of yours,
              rewarding consistency, care, and the ritual of living well.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VCaps;