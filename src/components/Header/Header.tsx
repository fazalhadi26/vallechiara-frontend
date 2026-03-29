import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../context/CartContext';
import logoImg from '../../assets/logo.svg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('ar');
  const location = useLocation();
  const { totalItems } = useCart();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getNavClass = (path: string) => {
    return location.pathname === path ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className={styles.header}>
      {/* Official Image Logo branding */}
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={styles.logoContainer}>
        <img src={logoImg} alt="Vallechiara Logo" className={styles.logoImage} />
      </Link>

      <div className={`${styles.menuContainer} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.navLinks}>
          <NavLink to="/our-story" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/our-story')}>Our Story</NavLink>
          <NavLink to="/inside-the-source" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/inside-the-source')}>Inside the Source</NavLink>
          <div className={styles.dropdownWrap}>
            <NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/shop')}>
              Shop Water
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </NavLink>
          </div>
          <NavLink to="/wct" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/wct')}>WCT</NavLink>
          <NavLink to="/support" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/support')}>Support</NavLink>
        </nav>

        <div className={styles.actions}>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className={styles.iconBtn} aria-label="User Account">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </Link>
          
          <button className={styles.langBtn} onClick={toggleLanguage} aria-label="Toggle Language">
            <span>{lang === 'ar' ? 'عربي' : 'English'}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
          </button>

          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className={styles.cartBtn} aria-label="Shopping Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            <span className={styles.cartBadge}>{totalItems}</span>
          </Link>

          <Link to="/subscribe" onClick={() => setIsMobileMenuOpen(false)} className={styles.subscribeBtn} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>SUBSCRIBE</Link>
          <button className={styles.phoneBtn} aria-label="Contact Phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </button>
        </div>
      </div>

      <div className={styles.mobileNavActions}>
        <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={styles.buyNowBtnMobile}>Buy Now</Link>
        <Link to="/subscribe" onClick={() => setIsMobileMenuOpen(false)} className={styles.subscribeBtnMobile}>Subscribe</Link>
      </div>

      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Navigation">
        {isMobileMenuOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        )}
      </button>
    </header>
  );
}
