import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../context/CartContext';
import logoImg from '../../assets/logo.svg';

const SHOP_LINKS = [
  { label: 'Our Bottles', to: '/shop' },
  { label: 'Prepaid Subscription', to: '/subscribe' },
  { label: 'Accessories', to: '/shop' },
  { label: 'Gift Cards', to: '/shop' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [shopBtnLeft, setShopBtnLeft] = useState(0);
  const [lang, setLang] = useState('ar');
  const location = useLocation();
  const { totalItems } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shopBtnRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsShopOpen(false);
  };

  const getNavClass = (path: string) =>
    location.pathname === path ? `${styles.navLink} ${styles.active}` : styles.navLink;

  const toggleLanguage = () => setLang(lang === 'ar' ? 'en' : 'ar');

  // Update shop button position for alignment
  const updateShopPos = () => {
    if (shopBtnRef.current) {
      const rect = shopBtnRef.current.getBoundingClientRect();
      setShopBtnLeft(rect.left);
    }
  };

  useEffect(() => {
    updateShopPos();
    window.addEventListener('resize', updateShopPos);
    return () => window.removeEventListener('resize', updateShopPos);
  }, []);

  useEffect(() => {
    if (isShopOpen) updateShopPos();
  }, [isShopOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsShopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsShopOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={styles.logoContainer}>
        <img src={logoImg} alt="Vallechiara Logo" className={styles.logoImage} />
      </Link>

      <div className={`${styles.menuContainer} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.navLinks}>
          <NavLink to="/our-story" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/our-story')}>Our Story</NavLink>
          <NavLink to="/inside-the-source" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/inside-the-source')}>Inside the Source</NavLink>

          {/* Shop Water dropdown */}
          <div className={styles.dropdownWrap} ref={dropdownRef}>
            <button
              ref={shopBtnRef}
              className={`${styles.navLink} ${styles.shopBtn} ${location.pathname === '/shop' ? styles.active : ''} ${isShopOpen ? styles.shopOpen : ''}`}
              onClick={() => setIsShopOpen(!isShopOpen)}
              aria-expanded={isShopOpen}
              aria-haspopup="true"
            >
              Shop Water
              <svg
                className={`${styles.chevron} ${isShopOpen ? styles.chevronUp : ''}`}
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div 
              className={`${styles.dropdown} ${isShopOpen ? styles.dropdownOpen : ''}`}
              style={{ paddingLeft: `${shopBtnLeft}px` }}
            >
              <div className={styles.dropdownInner}>
                {SHOP_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setIsShopOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/wct" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/wct')}>WCT</NavLink>
          <NavLink to="/support" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('/support')}>Support</NavLink>
        </nav>

        <div className={styles.actions}>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className={styles.iconBtn} aria-label="User Account">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 16C2.55556 13 6.05556 12.4583 8 12.4583C9.94444 12.4583 13.4444 13 15 16M12.4444 5.16667C12.4444 7.46785 10.4546 9.33333 8 9.33333C5.5454 9.33333 3.55556 7.46785 3.55556 5.16667C3.55556 2.86548 5.5454 1 8 1C10.4546 1 12.4444 2.86548 12.4444 5.16667Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Link>

          <button className={styles.langBtn} onClick={toggleLanguage} aria-label="Toggle Language">
            <span>{lang === 'ar' ? 'عربي' : 'English'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20312 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20312 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20312 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20312 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333ZM9.16667 16.5C11.2139 16.5 12.9479 15.7896 14.3688 14.3688C15.7896 12.9479 16.5 11.2139 16.5 9.16667C16.5 9.05972 16.4962 8.94896 16.4885 8.83438C16.4809 8.71979 16.4771 8.62431 16.4771 8.54792C16.4007 8.99097 16.1944 9.35764 15.8583 9.64792C15.5222 9.93819 15.125 10.0833 14.6667 10.0833H12.8333C12.3292 10.0833 11.8976 9.90382 11.5385 9.54479C11.1795 9.18576 11 8.75417 11 8.25V7.33333H7.33333V5.5C7.33333 4.99583 7.51285 4.56424 7.87188 4.20521C8.2309 3.84618 8.6625 3.66667 9.16667 3.66667H10.0833C10.0833 3.31528 10.1788 3.0059 10.3698 2.73854C10.5608 2.47118 10.7937 2.25347 11.0688 2.08542C10.7632 2.00903 10.4538 1.94792 10.1406 1.90208C9.82743 1.85625 9.50278 1.83333 9.16667 1.83333C7.11944 1.83333 5.38542 2.54375 3.96458 3.96458C2.54375 5.38542 1.83333 7.11944 1.83333 9.16667H6.41667C7.425 9.16667 8.28819 9.52569 9.00625 10.2438C9.72431 10.9618 10.0833 11.825 10.0833 12.8333V13.75H7.33333V16.2708C7.63889 16.3472 7.94063 16.4045 8.23854 16.4427C8.53646 16.4809 8.84583 16.5 9.16667 16.5Z" fill="#25282A"></path></svg>
          </button>

          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className={styles.cartBtn} aria-label="Shopping Cart">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.28311 4.75H4.14699C2.93936 4.75 2.33605 4.75 1.90653 4.99857C1.52961 5.2167 1.23987 5.56127 1.08858 5.97223C0.91628 6.44026 1.01546 7.04059 1.21374 8.24097L1.21415 8.24322L2.08143 13.4932C2.22855 14.3837 2.30259 14.8293 2.52284 15.1635C2.71699 15.458 2.98952 15.6909 3.30943 15.8357C3.67234 15.9999 4.11961 16 5.01451 16H12.9857C13.8806 16 14.3275 15.9999 14.6905 15.8357C15.0103 15.6909 15.2832 15.458 15.4773 15.1635C15.6975 14.8293 15.7712 14.3837 15.9183 13.4932L16.7855 8.24322L16.7864 8.23956C16.9846 7.04013 17.0837 6.44007 16.9114 5.97223C16.7601 5.56127 16.4711 5.2167 16.0942 4.99857C15.6647 4.75 15.0603 4.75 13.8527 4.75H12.7168M5.28311 4.75H12.7168M5.28311 4.75C5.28311 2.67893 6.9472 1 8.99998 1C11.0527 1 12.7168 2.67893 12.7168 4.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span className={styles.cartBadge}>{totalItems}</span>
          </Link>

          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={styles.buyNowBtn}>Buy Now</Link>
          <Link to="/subscribe" onClick={() => setIsMobileMenuOpen(false)} className={styles.subscribeBtn}>SUBSCRIBE</Link>
          <button className={styles.phoneBtn} aria-label="Contact Phone">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.26771 18.6945C3.29482 19.0291 3.39706 19.3671 3.58221 19.6889C3.76735 20.0108 3.99748 20.3103 4.29116 20.5859C4.78734 21.051 5.31871 21.3729 5.9046 21.5593C6.48119 21.7465 7.09523 21.8184 7.74596 21.7657C8.69416 21.6889 9.68935 21.3837 10.7215 20.8415C11.7536 20.2994 12.773 19.5993 13.7702 18.7418C14.776 17.8743 15.7192 16.9277 16.6085 15.8919C17.4876 14.8475 18.2701 13.7642 18.9558 12.6419C19.6322 11.5204 20.1599 10.4109 20.521 9.32433C20.8813 8.22842 21.0223 7.19707 20.944 6.23028C20.8928 5.59814 20.7323 5.00294 20.464 4.46325C20.1949 3.91426 19.7995 3.4223 19.2691 2.99742C18.6267 2.45997 17.9527 2.22451 17.2648 2.28025C17.0045 2.30133 16.7487 2.3782 16.5253 2.50858C16.2927 2.63972 16.0924 2.82437 15.9447 3.07963L14.0343 6.29419C13.8858 6.54015 13.7822 6.76375 13.7151 6.97504C13.6473 7.17704 13.6166 7.37602 13.6309 7.55265C13.649 7.77575 13.7322 7.99359 13.8796 8.19685C14.0178 8.40087 14.2125 8.60967 14.4537 8.8147L15.2197 9.49184C15.3302 9.58582 15.3865 9.7029 15.3986 9.85164C15.4046 9.92601 15.4006 9.99183 15.388 10.0677C15.3661 10.1443 15.3428 10.2024 15.3287 10.2597C15.1862 10.58 14.9304 11.0031 14.5606 11.5196C14.1814 12.0369 13.7751 12.5657 13.3316 13.0976C12.8696 13.631 12.4231 14.1256 11.9643 14.5839C11.514 15.0321 11.1369 15.3433 10.8344 15.5363C10.7894 15.5586 10.7359 15.591 10.6731 15.6242C10.601 15.6581 10.5273 15.6734 10.4437 15.6802C10.2856 15.693 10.1603 15.647 10.0497 15.5531L9.28674 14.9131C9.03551 14.6995 8.79809 14.541 8.57525 14.4467C8.35089 14.3339 8.13181 14.2862 7.89941 14.305C7.72278 14.3193 7.53987 14.3716 7.34214 14.4718C7.1444 14.572 6.94038 14.7102 6.72078 14.8871L3.82078 17.321C3.59264 17.5079 3.44112 17.7166 3.3577 17.9573C3.28357 18.1973 3.24662 18.4342 3.26771 18.6945Z" fill="currentColor"></path></svg>
            <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: 'bold' }}>800 430</span>
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
      {/* Shop Overlay — covers the page content below the header */}
      {isShopOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsShopOpen(false)} 
        />
      )}
    </header>
  );
}
