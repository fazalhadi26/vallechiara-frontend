import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import styles from './Signup.module.css';
import pageStyles from '../../Shared/Page.module.css';

export default function Signup() {
  return (
    <div className={`${pageStyles.pageContainer} ${styles.loginPageBg}`}>
      <h1 className={`${pageStyles.pageTitle} ${styles.loginTitle}`}>SIGN UP</h1>
      
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
              <div className={styles.uaePrefix}>
                <span className={styles.uaeFlag}>
                  <img src="https://flagcdn.com/w40/ae.png" alt="UAE" />
                </span>
                <span className={styles.uaeCode}>+971</span>
              </div>
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
              <div className={styles.selectWrapper}>
                <select className={`${styles.formInput} ${styles.selectInput}`} required defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <FiChevronDown className={styles.selectDropdownIcon} />
              </div>
            </div>
          </div>

          <div className={styles.nameRow}>
            <div className={styles.inputGroup}>
              <label>Weight</label>
              <div className={styles.measurementGroup}>
                <input type="number" placeholder="70" className={styles.formInput} required />
                <div className={`${styles.selectWrapper} ${styles.unitWrap}`}>
                  <select className={`${styles.formInput} ${styles.selectInput} ${styles.unitSelect}`} required defaultValue="kg">
                    <option value="kg">KG</option>
                    <option value="lb">LB</option>
                  </select>
                  <FiChevronDown className={styles.selectDropdownIcon} />
                </div>
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Height</label>
              <div className={styles.measurementGroup}>
                <input type="number" placeholder="175" className={styles.formInput} required />
                <div className={`${styles.selectWrapper} ${styles.unitWrap}`}>
                  <select className={`${styles.formInput} ${styles.selectInput} ${styles.unitSelect}`} required defaultValue="cm">
                    <option value="cm">CM</option>
                    <option value="ft">FT</option>
                  </select>
                  <FiChevronDown className={styles.selectDropdownIcon} />
                </div>
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
            SIGN UP
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
