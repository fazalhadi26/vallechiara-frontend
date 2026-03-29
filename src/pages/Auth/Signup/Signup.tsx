import { Link } from 'react-router-dom';
import styles from './Signup.module.css';
import pageStyles from '../../Shared/Page.module.css';

export default function Signup() {
  return (
    <div className={`${pageStyles.pageContainer} ${styles.loginPageBg}`}>
      <h1 className={`${pageStyles.pageTitle} ${styles.loginTitle}`}>CREATE ACCOUNT</h1>
      
      <div className={styles.simpleLoginCard}>
        
        {/* EMAIL FORM MODE */}
        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.nameRow}>
            <div className={styles.inputGroup}>
              <label>First Name</label>
              <input type="text" placeholder="John" className={styles.formInput} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Last Name</label>
              <input type="text" placeholder="Doe" className={styles.formInput} required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="example@mail.com" className={styles.formInput} required />
          </div>
          
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Create a password" className={styles.formInput} required />
          </div>

          <div className={styles.formExtra}>
            <label className={styles.rememberChk}>
              <input type="checkbox" required />
              <span className={styles.chkBox}></span>
              I agree to the Terms & Conditions
            </label>
          </div>

          <button type="submit" className={styles.submitBtn}>
            CREATE ACCOUNT
          </button>
        </form>

        {/* ----- MID SECTION: ALWAYS VISIBLE ----- */}
        <p className={styles.createAccount}>
          Already Registered? <Link to="/login">Sign In Instead</Link>
        </p>

        <div className={styles.divider}>
          <span>OR sign up with</span>
        </div>

        {/* ----- BOTTOM SECTION: SOCIALS ----- */}
        <div className={styles.bottomAlternatives}>
          <div className={styles.socialIcons}>
            <button className={styles.socialBtn}>
              <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
            </button>
            <button className={styles.socialBtn}>
              <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
