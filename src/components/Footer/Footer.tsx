import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.topCard}>
          <div className={styles.logoSection}>
            <Link to="/" className={styles.logo}>VALLECHIARA</Link>
            <div className={styles.contactInfo}>
              <p>CUSTOMER SUPPORT NUMBER:</p>
              <p>DIREZIONEGENERALE@NOVATERMEVALLECHIARASRL.COM</p>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <Link to="/shop-all">SHOP ALL</Link>
              <Link to="/our-story">OUR STORY</Link>
              <Link to="/water-attributes">WATER ATTRIBUTES</Link>
              <Link to="/sustainability">SUSTAINABILITY</Link>
              <Link to="/subscribe">SUBSCRIBE</Link>
            </div>
            <div className={styles.linkColumn}>
              <Link to="/contact">CONTACT</Link>
              <Link to="/my-account">MY ACCOUNT</Link>
              <Link to="/shipping-returns">SHIPPING & RETURN</Link>
              <Link to="/track-order">TRACK ORDER</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div className={styles.newsletterSection}>
            <h3>GET UPDATES &<br/>STAY CONNECTED</h3>
            <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="YOUR EMAIL" required />
              <button type="submit">JOIN</button>
            </form>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <div className={styles.policyLinks}>
              <Link to="/terms">Terms & Conditions</Link>
              <span className={styles.separator}>|</span>
              <Link to="/privacy">Privacy Policy</Link>
              <span className={styles.separator}>|</span>
              <Link to="/intellectual-property">Intellectual Property</Link>
            </div>
            <p className={styles.copyright}>COPYRIGHT © {new Date().getFullYear()} VALLECHIARA. ALL RIGHTS RESERVED.</p>
          </div>
          <div className={styles.bottomRightLogo}>
            <svg viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 21L3 4h5.5L12 14.5 15.5 4H21z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
