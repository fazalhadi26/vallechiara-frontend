import { Link } from 'react-router-dom';
import styles from './Signup.module.css';
import pageStyles from '../../Shared/Page.module.css';

export default function Signup() {
  return (
    <div className={`${pageStyles.pageContainer} ${styles.loginPageBg}`}>
      <h1 className={`${pageStyles.pageTitle} ${styles.loginTitle}`}>CREATE ACCOUNT</h1>
      
      <div className={styles.simpleLoginCard}>
        
        {/* MERGED SIGNUP FORM WITH CUSTOM MEASUREMENTS */}
        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" className={styles.formInput} required />
          </div>

          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="example@mail.com" className={styles.formInput} required />
          </div>

          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <div className={styles.measurementGroup}>
              <select className={`${styles.formInput} ${styles.selectInput} ${styles.countryCode}`} required defaultValue="+974">
                <option value="+974">🇶🇦 +974</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+39">🇮🇹 +39</option>
              </select>
              <input type="tel" placeholder="0000 0000" className={styles.formInput} required />
            </div>
          </div>

          <div className={styles.nameRow}>
            <div className={styles.inputGroup}>
              <label>Age</label>
              <input type="number" placeholder="25" min="12" max="120" className={styles.formInput} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Gender</label>
              <select className={`${styles.formInput} ${styles.selectInput}`} required defaultValue="">
                <option value="" disabled>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.nameRow}>
            <div className={styles.inputGroup}>
              <label>Weight</label>
              <div className={styles.measurementGroup}>
                <input type="number" placeholder="70" className={styles.formInput} required />
                <select className={`${styles.formInput} ${styles.selectInput} ${styles.unitSelect}`} required defaultValue="kg">
                  <option value="kg">KG</option>
                  <option value="lb">LB</option>
                </select>
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Height</label>
              <div className={styles.measurementGroup}>
                <input type="number" placeholder="175" className={styles.formInput} required />
                <select className={`${styles.formInput} ${styles.selectInput} ${styles.unitSelect}`} required defaultValue="cm">
                  <option value="cm">CM</option>
                  <option value="ft">FT</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Create a strong password" className={styles.formInput} required />
          </div>

          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className={styles.formInput} required />
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
