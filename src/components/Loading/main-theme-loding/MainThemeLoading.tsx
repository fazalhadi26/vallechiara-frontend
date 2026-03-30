import styles from './MainThemeLoading.module.css';

const MainThemeLoading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}>
        <div className={styles.innerSpinner}></div>
      </div>
      <p className={styles.loadingText}>Restoring Purity...</p>
    </div>
  );
};

export default MainThemeLoading;
