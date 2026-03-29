import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styles from './Login.module.css';
import pageStyles from '../../Shared/Page.module.css';

export default function Login() {
  const [loginMethod, setLoginMethod] = useState<'initial' | 'email' | 'otp'>('initial');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${pageStyles.pageContainer} ${styles.loginPageBg}`}>
      <h1 className={`${pageStyles.pageTitle} ${styles.loginTitle}`}>SIGN IN</h1>
      
      <div className={styles.simpleLoginCard}>
        
        {/* ----- TOP SECTION: ACTIVE LOGIN METHOD ----- */}
        
        {/* INITIAL MODE */}
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
          </div>
        )}

        {/* EMAIL FORM MODE */}
        {loginMethod === 'email' && (
          <form className={styles.fadeEnter} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="example@mail.com" className={styles.formInput} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Password</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter password" 
                  className={styles.formInput} 
                  required 
                />
                <button 
                  type="button" 
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
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

        {/* OTP FORM MODE */}
        {loginMethod === 'otp' && (
          <form className={styles.fadeEnter} onSubmit={(e) => e.preventDefault()}>
            <p className={styles.formDesc}>Enter your phone number to receive a one-time password.</p>
            
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

        {/* ----- MID SECTION: ALWAYS VISIBLE ----- */}
        <p className={styles.createAccount}>
          New Here? <Link to="/signup">Sign Up</Link>
        </p>

        <div className={styles.divider}>
          <span>OR sign in with</span>
        </div>

        {/* ----- BOTTOM SECTION: ALTERNATIVES & SOCIALS ----- */}
        
        {/* If a specific method is selected, show the alternate big button here at the bottom */}
        <div className={styles.bottomAlternatives}>
          {loginMethod === 'email' && (
            <button className={styles.loginBtn} onClick={() => setLoginMethod('otp')}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              SIGN IN WITH OTP
            </button>
          )}

          {loginMethod === 'otp' && (
            <button className={styles.loginBtn} onClick={() => setLoginMethod('email')}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </span>
              SIGN IN WITH EMAIL
            </button>
          )}
          
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