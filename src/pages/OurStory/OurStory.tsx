import styles from '../Shared/Page.module.css';

export default function OurStory() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Our Story</h1>
      <p className={styles.pageSubtitle}>
        Since 1833, Vallechiara has been committed to providing naturally refined, pristine Italian spring water sourced directly from protected ecosystems.
      </p>
    </div>
  );
}
