import styles from './Support.module.css';
import { Link } from 'react-router-dom';

export default function Support() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>

        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className={styles.separator}>|</span>
          <span className={styles.current}>Customer Support</span>
        </nav>

        {/* Main Title */}
        <h1 className={styles.mainTitle}>CUSTOMER SUPPORT</h1>

        <div className={styles.contentSection}>

          {/* Customer Care Intro */}
          <h2 className={styles.sectionTitle}>CUSTOMER CARE - VALLECHIARA</h2>
          <p className={styles.subHeading}>Your comfort and trust are our priority.</p>
          <p className={styles.paragraph}>
            At Vallechiara, every detail, including your support, flows with care.
          </p>
          <p className={styles.paragraph}>
            Whether you're placing an order, managing your account, or tracking a delivery, our team is here to make your experience smooth and effortless.
          </p>

          {/* Contact Info */}
          <h2 className={styles.sectionTitle}>We're Here for You</h2>
          <ul className={styles.contactList}>
            <li>Email: <a href="mailto:support@vallechiara.ae">support@vallechiara.ae</a></li>
            <li>Phone: 800-430</li>
            <li>Live Chat: Available during support hours: Monday to Friday, 9 AM-6 PM</li>
          </ul>

          {/* Common Questions */}
          <h2 className={styles.sectionTitle}>COMMON QUESTIONS</h2>
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

          {/* Our Commitment */}
          <h2 className={styles.sectionTitle}>OUR COMMITMENT</h2>
          <div className={styles.commitmentBlock}>
            <p>Response Time: All inquiries are answered within 24-48 hours.</p>
            <p>Privacy: Your information is protected, always. Review our Privacy Policy for details.</p>
            <p>Feedback: We value your voice. Share your thoughts at <a href="mailto:feedback@vallechiara.com">feedback@vallechiara.com</a></p>
          </div>

          {/* A Closing Note */}
          <h2 className={styles.sectionTitle}>A CLOSING NOTE</h2>
          <p className={styles.paragraph}>
            At Vallechiara, we believe care should flow as naturally as water.
          </p>
          <p className={styles.paragraph}>
            Thank you for letting us be part of your daily rituals of purity.
          </p>

        </div>
      </div>
    </div>
  );
}
