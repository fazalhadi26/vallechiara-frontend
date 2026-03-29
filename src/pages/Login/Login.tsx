import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import pageStyles from '../Shared/Page.module.css';

export default function Login() {
  const [loginMethod, setLoginMethod] = useState<'initial' | 'email' | 'otp'>('initial');

  return (
    <div className={`${pageStyles.pageContainer} ${styles.loginPageBg}`}>
      <h1 className={pageStyles.pageTitle}>SIGN IN</h1>
      
      <div className={styles.simpleLoginCard}>
        {loginMethod === 'initial' && (
          <div className={styles.fadeEnter}>
            <button className={styles.loginBtn} onClick={() => setLoginMethod('email')}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </span>
              SIGN IN WITH EMAIL
            </button>

            <button className={styles.loginBtn} onClick={() => setLoginMethod('otp')}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              SIGN IN WITH OTP
            </button>

            <p className={styles.createAccount}>
              New Here? <Link to="/register">Create Account</Link>
            </p>

            <div className={styles.divider}>
              <span>OR sign in with</span>
            </div>

            <div className={styles.socialIcons}>
              <button className={styles.socialBtn}>
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
              </button>
              <button className={styles.socialBtn}>
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" />
              </button>
            </div>
          </div>
        )}

        {loginMethod === 'email' && (
          <form className={styles.fadeEnter} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formHeader}>
              <button type="button" className={styles.backBtn} onClick={() => setLoginMethod('initial')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <h2>Email Login</h2>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="example@mail.com" className={styles.formInput} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input type="password" placeholder="Enter password" className={styles.formInput} required />
            </div>

            <div className={styles.formExtra}>
              <label className={styles.rememberChk}>
                <input type="checkbox" />
                <span className={styles.chkBox}></span>
                Remember me
              </label>
              <a href="#forgot" className={styles.forgotPwd}>Forgot password?</a>
            </div>

            <button type="submit" className={styles.submitBtn}>
              LOGIN
            </button>
          </form>
        )}

        {loginMethod === 'otp' && (
          <form className={styles.fadeEnter} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formHeader}>
              <button type="button" className={styles.backBtn} onClick={() => setLoginMethod('initial')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <h2>OTP Login</h2>
            </div>

            <p className={styles.formDesc}>Enter your phone number to receive a one-time password.</p>
            
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className={styles.formInput} required />
            </div>

            <button type="button" className={styles.secondarySubmitBtn}>
              SEND OTP
            </button>

            <div className={`${styles.inputGroup} ${styles.mt4}`}>
              <label>Verification Code</label>
              <input type="text" placeholder="------" className={styles.formInput} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              VERIFY & LOGIN
            </button>
          </form>
        )}
      </div>
    </div>
  );
}