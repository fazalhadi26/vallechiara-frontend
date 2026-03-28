import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        
        <div className={styles.columnsWrapper}>
          
          {/* Column 1: Brand & Contact Info */}
          <div className={styles.colInfo}>
            <div className={styles.footerLogoPlaceholder}>V</div>
            <p className={styles.copyrightText}>© {new Date().getFullYear()} vallechiara</p>
            <div className={styles.contactLine}>
              <span className={styles.iconWrapper}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <a href="mailto:support@vallechiara.ae">support@vallechiara.ae</a>
              
              <span className={styles.iconWrapper} style={{ marginLeft: '15px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <a href="tel:800430">800 430</a>
            </div>
          </div>

          {/* Column 2: Navigation Map */}
          <div className={styles.colLinks}>
            <Link to="/our-story" className={styles.footerLink}>Our Story</Link>
            <Link to="/inside-the-source" className={styles.footerLink}>Inside the Source</Link>
            <Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link>
          </div>

          {/* Column 3: Navigation Map */}
          <div className={styles.colLinks}>
            <Link to="/shop" className={styles.footerLink}>Shop Water</Link>
            <Link to="/v-caps" className={styles.footerLink}>V CAPS</Link>
          </div>

          {/* Column 4: Newsletter */}
          <div className={styles.colNewsletter}>
            <h3 className={styles.newsletterTitle}>Get updates & stay connected</h3>
            <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required className={styles.emailInput} />
              <button type="submit" className={styles.joinBtn}>JOIN</button>
            </form>
            <div className={styles.socialGrid}>
              
              {/* Facebook Icon */}
              <a href="https://facebook.com" className={styles.socialIcon} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="#0077ff"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path></svg>
              </a>

              {/* Instagram Icon */}
              <a href="https://instagram.com" className={styles.socialIcon} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none">
                  {/* Instantly recognized Instagram colorful mask setup */}
                  <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="url(#ig-gradient)"></rect>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"></circle>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"></circle>
                  <defs>
                    <linearGradient id="ig-gradient" x1="2" y1="2" x2="22" y2="22">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
