import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import footerLogo from '../../assets/footer-images/footer-Icon-new.svg';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        
        <div className={styles.columnsWrapper}>
          
          {/* Section 1: Brand Info (Bottom on Mobile) */}
          <div className={styles.brandSection}>
            <div className={styles.footerLogoContainer}>
              <img src={footerLogo} alt="Vallechiara Logo" className={styles.footerLogo} />
            </div>
            <p className={styles.copyrightText}>© {new Date().getFullYear()} vallechiara</p>
            <div className={styles.contactLine}>
              <span className={styles.socialAction}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:support@vallechiara.ae">support@vallechiara.ae</a>
              </span>
              <span className={styles.socialAction}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:800430">800 430</a>
              </span>
            </div>
          </div>

          {/* Section 2: Links (Middle on Mobile) */}
          <div className={`${styles.colLinks} ${styles.colLinks1}`}>
            <Link to="/our-story" className={styles.footerLink}>Our Story</Link>
            <Link to="/inside-the-source" className={styles.footerLink}>Inside the Source</Link>
            <Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link>
          </div>
          <div className={`${styles.colLinks} ${styles.colLinks2}`}>
            <Link to="/shop" className={styles.footerLink}>Shop Water</Link>
            <Link to="/vcaps" className={styles.footerLink}>V CAPS</Link>
          </div>
 
          {/* Section 3: Newsletter & Social (Top on Mobile) */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterTitle}>Get updates & stay connected</h3>
            <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required className={styles.emailInput} />
              <button type="submit" className={styles.joinBtn}>JOIN</button>
            </form>
            <div className={styles.socialGrid}>
              <a href="https://www.facebook.com/people/Vallechiara/61565795190600/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0.0400391C4.5 0.0400391 0 4.53004 0 10.0601C0 15.0601 3.66 19.2101 8.44 19.9601V12.9601H5.9V10.0601H8.44V7.85004C8.44 5.34004 9.93 3.96004 12.22 3.96004C13.31 3.96004 14.45 4.15004 14.45 4.15004V6.62004H13.19C11.95 6.62004 11.56 7.39004 11.56 8.18006V10.0601H14.34L13.89 12.9601H11.56V19.9601C13.9164 19.5879 16.0622 18.3856 17.6099 16.5701C19.1576 14.7547 20.0054 12.4457 20 10.0601C20 4.53004 15.5 0.0400391 10 0.0400391Z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/vallechiarawater/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <defs>
                    <linearGradient id="instagram-gradient-7pybl5cl7" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="100%" stopColor="#FCAF45" />
                    </linearGradient>
                  </defs>
                  <path d="M10.4993 0.916504C13.1031 0.916504 13.428 0.926087 14.4496 0.974004C15.4702 1.02192 16.165 1.18196 16.7764 1.41963C17.4089 1.66305 17.9418 1.99271 18.4746 2.52459C18.9619 3.00365 19.339 3.58315 19.5796 4.22275C19.8163 4.83321 19.9773 5.52896 20.0252 6.54959C20.0702 7.57117 20.0827 7.89605 20.0827 10.4998C20.0827 13.1036 20.0731 13.4285 20.0252 14.4501C19.9773 15.4707 19.8163 16.1655 19.5796 16.7769C19.3397 17.4169 18.9625 17.9965 18.4746 18.4751C17.9954 18.9622 17.4159 19.3393 16.7764 19.58C16.166 19.8168 15.4702 19.9778 14.4496 20.0257C13.428 20.0707 13.1031 20.0832 10.4993 20.0832C7.89556 20.0832 7.57068 20.0736 6.5491 20.0257C5.52847 19.9778 4.83368 19.8168 4.22227 19.58C3.58241 19.34 3.00281 18.9628 2.5241 18.4751C2.0367 17.9961 1.65962 17.4166 1.41914 16.7769C1.18147 16.1665 1.02143 15.4707 0.973516 14.4501C0.928474 13.4285 0.916016 13.1036 0.916016 10.4998C0.916016 7.89605 0.925599 7.57117 0.973516 6.54959C1.02143 5.528 1.18147 4.83417 1.41914 4.22275C1.65895 3.58276 2.03612 3.0031 2.5241 2.52459C3.00295 2.03702 3.58251 1.65991 4.22227 1.41963C4.83368 1.18196 5.52752 1.02192 6.5491 0.974004C7.57068 0.928962 7.89556 0.916504 10.4993 0.916504ZM10.4993 5.70817C9.22852 5.70817 8.00974 6.21301 7.11113 7.11162C6.21252 8.01023 5.70768 9.22901 5.70768 10.4998C5.70768 11.7707 6.21252 12.9894 7.11113 13.8881C8.00974 14.7867 9.22852 15.2915 10.4993 15.2915C11.7702 15.2915 12.989 14.7867 13.8876 13.8881C14.7862 12.9894 15.291 11.7707 15.291 10.4998C15.291 9.22901 14.7862 8.01023 13.8876 7.11162C12.989 6.21301 11.7702 5.70817 10.4993 5.70817ZM16.7285 5.46859C16.7285 5.15088 16.6023 4.84619 16.3777 4.62153C16.153 4.39688 15.8483 4.27067 15.5306 4.27067C15.2129 4.27067 14.9082 4.39688 14.6835 4.62153C14.4589 4.84619 14.3327 5.15088 14.3327 5.46859C14.3327 5.78629 14.4589 6.09099 14.6835 6.31564C14.9082 6.5403 15.2129 6.6665 15.5306 6.6665C15.8483 6.6665 16.153 6.5403 16.3777 6.31564C16.6023 6.09099 16.7285 5.78629 16.7285 5.46859ZM10.4993 7.62484C11.2618 7.62484 11.9931 7.92774 12.5323 8.4669C13.0714 9.00607 13.3743 9.73734 13.3743 10.4998C13.3743 11.2623 13.0714 11.9936 12.5323 12.5328C11.9931 13.0719 11.2618 13.3748 10.4993 13.3748C9.73685 13.3748 9.00558 13.0719 8.46642 12.5328C7.92725 11.9936 7.62435 11.2623 7.62435 10.4998C7.62435 9.73734 7.92725 9.00607 8.46642 8.4669C9.00558 7.92774 9.73685 7.62484 10.4993 7.62484Z" fill="url(#instagram-gradient-7pybl5cl7)" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
