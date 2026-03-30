import styles from './Profile.module.css';

// SVG Icons for the cards
const Icons = {
  Email: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Age: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  BodyWeight: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>,
  Height: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14.89V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11.89"></path><path d="M4 14.89a2 2 0 0 1-1 1.73l9 5.38 9-5.38a2 2 0 0 1-1-1.73"></path></svg>,
  Gender: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"></circle><path d="M12 13v7"></path><path d="M9 17h6"></path><circle cx="12" cy="10" r="8"></circle></svg>,
  Password: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
  Edit: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
};

const ProfileCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className={styles.profileCard}>
    <div className={styles.cardIcon}>{icon}</div>
    <div className={styles.cardInfo}>
      <span className={styles.cardLabel}>{label}</span>
      <span className={styles.cardValue}>{value}</span>
    </div>
  </div>
);

const Profile = () => {
  return (
    <div className={styles.profileContent}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>My Profile</h1>
      </header>
      
      <div className={styles.userHeader}>
        <div className={styles.avatarLarge}>
          <span>f</span>
        </div>
        <div className={styles.userMainInfo}>
          <h2 className={styles.profileName}>Fazal Hadi</h2>
          <p className={styles.profileAge}>| 21 Years Old</p>
        </div>
        <button className={styles.editBtn}>
          <Icons.Edit /> <span>Edit</span>
        </button>
      </div>

      <div className={styles.profileGrid}>
        <ProfileCard icon={<Icons.Email />} label="Email" value="fazalhadi1995@gmail.com" />
        <ProfileCard icon={<Icons.Age />} label="Age" value="21" />
        <ProfileCard icon={<Icons.BodyWeight />} label="Body Weight" value="111.0 KG" />
        <ProfileCard icon={<Icons.Height />} label="Height" value="100.0 CM" />
        <ProfileCard icon={<Icons.Gender />} label="Gender" value="Male" />
        <ProfileCard icon={<Icons.Password />} label="Reset Password" value="**********" />
      </div>
    </div>
  );
};

export default Profile;
