import { NavLink } from 'react-router-dom';
import styles from './MobileBottomNav.module.css';
import { useCart } from '../../context/CartContext';

export default function MobileBottomNav() {
  const { totalItems } = useCart();

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      path: "/subscribe",
      label: "Subscribe",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      )
    },
    {
      path: "/shop",
      label: "Shop",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    },
    {
      path: "/login",
      label: "Account",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      path: "/cart",
      label: "Cart",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      isCart: true
    }
  ];

  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          {item.icon}
          {item.isCart && totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
          <span className={styles.label}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
