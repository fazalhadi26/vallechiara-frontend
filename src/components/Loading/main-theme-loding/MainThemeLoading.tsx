import styles from './MainThemeLoading.module.css';
import LogoLoading from '../../../assets/logo-images/logo-loading.svg';

const MainThemeLoading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loaderCircle}>
        <div className={styles.fillAnimation}></div>
        <img src={LogoLoading} alt="Loading..." className={styles.loaderLogo} />
      </div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default MainThemeLoading;
