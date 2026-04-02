import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import illustration from '../../assets/four-0-four-images/pagenotfound.webp';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        {/* LEFT – Text content */}
        <div className={styles.textCol}>
          <h1 className={styles.heading}>Oops....</h1>
          <h2 className={styles.subheading}>Page not found</h2>
          <p className={styles.description}>
            This Page doesn't exist or was removed!
            We suggest you back to home.
          </p>
          <button
            className={styles.homeBtn}
            onClick={() => navigate('/')}
            aria-label="Go back to homepage"
          >
            Back to Home
          </button>
        </div>

        {/* RIGHT – Illustration */}
        <div className={styles.imageCol}>
          <img
            src={illustration}
            alt="404 – Page not found illustration"
            className={styles.illustration}
          />
        </div>

      </div>
    </section>
  );
}
