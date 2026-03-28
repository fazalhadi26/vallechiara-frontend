import styles from '../Shared/Page.module.css';

export default function WCT() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Water Conservation Trust</h1>
      <p className={styles.pageSubtitle}>
        Committed to global sustainability, the WCT empowers environmental health by protecting precious water resources worldwide.
      </p>
    </div>
  );
}
