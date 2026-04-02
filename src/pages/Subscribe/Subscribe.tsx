import styles from './Subscribe.module.css';
import waterBottleImg from '../../assets/subscribe/water-bottle.webp';

const calculateCard = {
  title: "FIGURE OUT YOUR MONTHLY WATER CONSUMPTION",
  btnText: "CALCULATE",
  note: "Based on family members and hydration practice",
};

const subscriptionPlans = [
  {
    id: 1,
    discountBadge: "-15%",
    durationTitle: "1 Month",
    packageDesc: "1-Month / 4-Week Delivery Package",
    price: "AED 221.00",
    discountText: "15% Off on all your orders",
    deliveryDuration: "4 Week",
    deliveryFeatures: ["Custom Delivery Schedules", "Priority Delivery Slots"]
  },
  {
    id: 2,
    discountBadge: "-25%",
    durationTitle: "3 Month",
    packageDesc: "3-Month / 12-Week Delivery Package",
    price: "AED 585.00",
    discountText: "25% Off on all your orders",
    deliveryDuration: "12 Week",
    deliveryFeatures: ["Custom Delivery Schedules", "Priority Delivery Slots"]
  },
  {
    id: 3,
    discountBadge: "-35%",
    durationTitle: "6 Month",
    packageDesc: "6-Month / 24-Week Delivery Package",
    price: "AED 1014.00",
    discountText: "35% Off on all your orders",
    deliveryDuration: "24 Week",
    deliveryFeatures: ["Custom Delivery Schedules", "Priority Delivery Slots"]
  }
];

export default function Subscribe() {
  return (
    <div className={styles.subscribeContainer}>

      <h1 className={styles.mainTitle}>STAY HYDRATED, THE VALLECHIARA WAY</h1>
      <p className={styles.mainSubtitle}>
        Experience effortless wellness with our subscription: pure Italian spring water, delivered to your door with exclusive savings and Free delivery.
      </p>

      <div className={styles.timelineSection}>
        <h3 className={styles.timelineTitle}>QUICK & EASY</h3>
        <div className={styles.timelineGraphic}>

          <div className={styles.timelineLine}></div>

          <div className={styles.step}>
            <div className={styles.stepCircle}>1</div>
            <div className={styles.stepIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            </div>
            <p>Choose Your Plan</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepCircle}>2</div>
            <div className={styles.stepIcon}>
              {/* 3 simple bottle icons combined */}
              <img src={waterBottleImg} alt="Water Bottle" className={styles.stepBottleImg} />
            </div>
            <p>Pick Your Water</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepCircle}>3</div>
            <div className={styles.stepIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
            </div>
            <p>Checkout & Enjoy</p>
          </div>

        </div>
      </div>

      <div className={styles.cardsGrid}>

        <div className={styles.calculateCard}>
          <h3 className={styles.calcTitle}>{calculateCard.title}</h3>
          <button className={styles.calcBtn}>{calculateCard.btnText}</button>
          <p className={styles.calcNote}>{calculateCard.note}</p>
        </div>

        {subscriptionPlans.map(plan => (
          <div className={styles.planCard} key={plan.id}>

            <div className={styles.planTop}>
              <div className={styles.planHeaderTop}>
                <div className={styles.discountBadge}>{plan.discountBadge}</div>
                <div className={styles.planTitleGroup}>
                  <div className={styles.planTitle}>{plan.durationTitle}</div>
                  <div className={styles.planDesc}>{plan.packageDesc}</div>
                </div>
              </div>
            </div>

            <div className={styles.planContent}>
              <div className={styles.priceContainer}>
                <div className={styles.priceLabel}>Starts from</div>
                <div className={styles.priceVal}>{plan.price}</div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.featureGroup}>
                <div className={styles.featureLabel}>Discount:</div>
                <div className={styles.featureGreen}>{plan.discountText}</div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.featureGroup}>
                <div className={styles.featureLabel}>Delivery Options:</div>
                <div className={styles.featureList}>
                  <span className={styles.featureText}>{plan.deliveryDuration}</span>
                  {plan.deliveryFeatures.map((feat, i) => (
                    <span key={i} className={styles.featureText}>{feat}</span>
                  ))}
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.readMore}>Read More</div>

              <button className={styles.selectBtn}>SELECT</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
