import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Subscribe.module.css';
import waterBottleImg from '../../assets/subscribe/water-bottle.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const calculateCard = {
  title: "FIGURE OUT\nYOUR MONTHLY WATER\nCONSUMPTION",
  btnText: "CALCULATE",
  note: "Based on family members and\nhydration practice",
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
    deliveryFeatures: ["Custom Delivery Schedules", "Priority Delivery Slots"],
    rewardingProgram: ["50 V Points", "Weekly Draw Eligibility"],
    convenience: ["Renewal", "Pause / Cancel Anytime", "Easy Reordering"],
    customizationOptions: ["Variety of Water Types", "Bottle Sizes"]
  },
  {
    id: 2,
    discountBadge: "-25%",
    durationTitle: "3 Month",
    packageDesc: "3-Month / 12-Week Delivery Package",
    price: "AED 585.00",
    discountText: "25% Off on all your orders",
    deliveryDuration: "12 Week",
    deliveryFeatures: ["Custom Delivery Schedules", "Priority Delivery Slots"],
    rewardingProgram: ["50 V Points", "Weekly Draw Eligibility"],
    convenience: ["Renewal", "Pause / Cancel Anytime", "Easy Reordering"],
    customizationOptions: ["Variety of Water Types", "Bottle Sizes"]
  },
  {
    id: 3,
    discountBadge: "-35%",
    durationTitle: "6 Month",
    packageDesc: "6-Month / 24-Week Delivery Package",
    price: "AED 1014.00",
    discountText: "35% Off on all your orders",
    deliveryDuration: "24 Week",
    deliveryFeatures: ["Custom Delivery Schedules", "Priority Delivery Slots"],
    rewardingProgram: ["50 V Points", "Weekly Draw Eligibility"],
    convenience: ["Renewal", "Pause / Cancel Anytime", "Easy Reordering"],
    customizationOptions: ["Variety of Water Types", "Bottle Sizes"]
  }
];

export default function Subscribe() {
  const [expandedPlans, setExpandedPlans] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedPlans(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.subscribeContainer}>

      <motion.h1 
        className={styles.mainTitle}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        STAY HYDRATED, THE VALLECHIARA WAY
      </motion.h1>
      <motion.p 
        className={styles.mainSubtitle}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        Experience effortless wellness with our subscription: pure Italian spring water, delivered to your door with exclusive savings and Free delivery.
      </motion.p>

      <motion.div 
        className={styles.timelineSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h3 className={styles.timelineTitle} variants={fadeUp}>QUICK & EASY</motion.h3>
        <div className={styles.timelineGraphic}>

          <motion.div className={styles.step} variants={fadeUp}>
            <div className={styles.stepCircle}>1</div>
            <div className={styles.stepIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            </div>
            <p>Choose Your Plan</p>
          </motion.div>

          <motion.div className={styles.step} variants={fadeUp}>
            <div className={styles.stepCircle}>2</div>
            <div className={styles.stepIcon}>
              {/* 3 simple bottle icons combined */}
              <img src={waterBottleImg} alt="Water Bottle" className={styles.stepBottleImg} />
            </div>
            <p>Pick Your Water</p>
          </motion.div>

          <motion.div className={styles.step} variants={fadeUp}>
            <div className={styles.stepCircle}>3</div>
            <div className={styles.stepIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
            </div>
            <p>Checkout & Enjoy</p>
          </motion.div>

        </div>
      </motion.div>

      <motion.div 
        className={styles.cardsGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >

        <motion.div variants={fadeUp} style={{ display: 'flex' }}>
          <div className={styles.calculateCard} style={{ flex: 1 }}>
            <h3 className={styles.calcTitle}>{calculateCard.title}</h3>
            <button className={styles.calcBtn}>{calculateCard.btnText}</button>
            <p className={styles.calcNote}>{calculateCard.note}</p>
          </div>
        </motion.div>

        {subscriptionPlans.map(plan => (
          <motion.div key={plan.id} variants={fadeUp} style={{ display: 'flex' }}>
            <div className={styles.planCard} style={{ flex: 1 }}>

              <div className={styles.planTop}>
                <div className={styles.planHeaderTop}>
                  <div className={styles.discountBadge}>{plan.discountBadge}</div>
                  <div className={styles.planTitleGroup}>
                    <div className={styles.planTitle}>{plan.durationTitle}</div>
                    <div className={styles.planDesc}>{plan.packageDesc}</div>
                  </div>
                </div>
                <div className={styles.priceContainer}>
                  <div className={styles.priceLabel}>Starts from</div>
                  <div className={styles.priceVal}>{plan.price}</div>
                </div>
              </div>

              <div className={styles.planContent}>
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

                <AnimatePresence>
                  {expandedPlans.includes(plan.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className={styles.featureGroup}>
                        <div className={styles.featureLabel}>Rewarding Program:</div>
                        <div className={styles.featureList}>
                          {plan.rewardingProgram.map((feat, i) => (
                            <span key={i} className={styles.featureText}>{feat}</span>
                          ))}
                        </div>
                      </div>

                      <div className={styles.divider}></div>

                      <div className={styles.featureGroup}>
                        <div className={styles.featureLabel}>Convenience:</div>
                        <div className={styles.featureList}>
                          {plan.convenience.map((feat, i) => (
                            <span key={i} className={styles.featureText}>{feat}</span>
                          ))}
                        </div>
                      </div>

                      <div className={styles.divider}></div>

                      <div className={styles.featureGroup}>
                        <div className={styles.featureLabel}>Customization Options:</div>
                        <div className={styles.featureList}>
                          {plan.customizationOptions.map((feat, i) => (
                            <span key={i} className={styles.featureText}>{feat}</span>
                          ))}
                        </div>
                      </div>

                      <div className={styles.divider}></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={styles.readMore} onClick={() => toggleExpand(plan.id)}>
                  {expandedPlans.includes(plan.id) ? "Read Less" : "Read More"}
                </div>

                <button className={styles.selectBtn}>SELECT</button>

              </div>

            </div>
          </motion.div>
        ))}

      </motion.div>

    </div>
  )
}
