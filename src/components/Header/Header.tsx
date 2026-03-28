import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>VALLECHIARA</Link>
      </div>
      
      <nav className={styles.navLinks}>
        <NavLink to="/our-story" className={({isActive}) => isActive ? styles.active : ''}>OUR STORY</NavLink>
        <NavLink to="/water-attributes" className={({isActive}) => isActive ? styles.active : ''}>WATER ATTRIBUTES</NavLink>
        <NavLink to="/sustainability" className={({isActive}) => isActive ? styles.active : ''}>SUSTAINABILITY</NavLink>
      </nav>

      <div className={styles.actions}>
        <Link to="#" className={styles.buyOnline}>BUY ONLINE</Link>
        <button className={styles.subscribeBtn}>SUBSCRIBE</button>
        <div className={styles.icons}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
    </header>
  );
}
