import styles from './Support.module.css';

export default function Support() {
  return (
    <div className={styles.supportContainer}>
      <header className={styles.titleArea}>
        <h1 className={styles.mainTitle}>Customer Support</h1>
      </header>

      <main className={styles.contentBody}>
        {/* Intro */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Customer Care - Vallechiara</h2>
          <p className={styles.subHeading}>Your comfort and trust are our priority.</p>
          <div className={styles.textBlock}>
            <p>At Vallechiara, every detail, including your support, flows with care.</p>
            <p>
              Whether you're placing an order, managing your account, or tracking a delivery, our team is here to make your experience smooth and effortless.
            </p>
          </div>
        </section>

        {/* Contact info */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>We're Here for You</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>Email: <a href="mailto:support@vallechiara.ae">support@vallechiara.ae</a></li>
            <li className={styles.contactItem}>Phone: 800-430</li>
            <li className={styles.contactItem}>Live Chat: Available during support hours: Monday to Friday, 9 AM-6 PM</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Common Questions</h2>
          <ul className={styles.faqList}>
            <li className={styles.faqItem}>
              <span className={styles.question}>1. How do I place an order?</span>
              <p className={styles.answer}>Simply browse our products, choose your preferred bottle size, and complete your order through our secure checkout.</p>
            </li>
            <li className={styles.faqItem}>
              <span className={styles.question}>2. How can I track my order?</span>
              <p className={styles.answer}>Log in to your account and open Order History to view your latest shipment updates.</p>
            </li>
            <li className={styles.faqItem}>
              <span className={styles.question}>3. How do I return an item?</span>
              <p className={styles.answer}>You may return unopened items in their original condition. Please refer to our Return Policy for instructions.</p>
            </li>
            <li className={styles.faqItem}>
              <span className={styles.question}>4. Can I update my account information?</span>
              <p className={styles.answer}>Yes. Visit Account Settings anytime to update your details.</p>
            </li>
            <li className={styles.faqItem}>
              <span className={styles.question}>5. What should I do if I forgot my password?</span>
              <p className={styles.answer}>Select Forgot Password on the login page and follow the link sent to your email.</p>
            </li>
          </ul>
        </section>

        {/* Commitment */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Commitment</h2>
          <div className={styles.textBlock}>
            <p><strong>Response Time:</strong> All inquiries are answered within 24-48 hours.</p>
            <p><strong>Privacy:</strong> Your information is protected, always. Review our Privacy Policy for details.</p>
            <p><strong>Feedback:</strong> We value your voice. Share your thoughts at <a href="mailto:feedback@vallechiara.ae">feedback@vallechiara.ae</a></p>
          </div>
        </section>

        {/* Closing */}
        <footer className={styles.closingNote}>
          <h2 className={styles.sectionHeading}>A Closing Note</h2>
          <div className={styles.textBlock}>
            <p>At Vallechiara, we believe care should flow as naturally as water.</p>
            <p>Thank you for letting us be part of your daily rituals of purity.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
