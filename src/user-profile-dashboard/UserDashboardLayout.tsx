import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './UserDashboardLayout.module.css';

// Simple Icons mapping following the image
const Icons = {
  Booking: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Subscription: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>,
  Profile: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Logout: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
  Generic: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle></svg>
};

const UserDashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.userInfo}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatarGradient}>
              <span>f</span>
            </div>
          </div>
          <h3 className={styles.userName}>Fazal Hadi</h3>
          <p className={styles.userPoints}>+</p>
        </div>

        <nav className={styles.navMenu}>
          <NavLink to="/account/booking" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
            <Icons.Booking /> <span>My Bookings</span>
          </NavLink>
          <NavLink to="/account/my-subscription" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
            <Icons.Subscription /> <span>My Subscriptions</span>
          </NavLink>
          <div className={styles.navLink}>
            <Icons.Generic /> <span>V-Caps</span>
          </div>
          <div className={styles.navLink}>
            <Icons.Generic /> <span>V-Caps Tickets</span>
          </div>
          <div className={styles.navLink}>
            <Icons.Generic /> <span>My Family</span>
          </div>
          <div className={styles.navLink}>
            <Icons.Generic /> <span>Water Consumption</span>
          </div>
          <div className={styles.navLink}>
            <Icons.Generic /> <span>Hydration</span>
          </div>
          <div className={styles.navLink}>
            <Icons.Generic /> <span>Reminders</span>
          </div>
          <NavLink to="/account/profile" className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
            <Icons.Profile /> <span>My Profile</span>
          </NavLink>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <Icons.Logout /> <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.contentArea}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboardLayout;
