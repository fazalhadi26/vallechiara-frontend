import styles from './TermsConditions.module.css';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className={styles.termsWrapper}>
      <div className={styles.container}>

        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className={styles.separator}>|</span>
          <span className={styles.current}>Terms &amp; Conditions</span>
        </nav>

        {/* Main Title */}
        <h1 className={styles.mainTitle}>TERMS &amp; CONDITIONS</h1>

        <div className={styles.contentSection}>

          {/* TERMS & CONDITIONS numbered list */}
          <h2 className={styles.sectionTitle}>TERMS &amp; CONDITIONS</h2>
          <ol className={styles.orderedList}>
            <li>Vallechiara deals with end customers through its official website vallechiara.ae.</li>
            <li>The product Vallechiara deals with is bottled drinking water, under different sizes of bottles and packages.</li>
            <li>Vallechiara serves the products within the United Arab Emirates only.</li>
            <li>Modes of sale include: 1) Subscriptions done via vallechiara.ae website and 2) Direct purchases from the website.</li>
            <li>Customers have to remit full payment in advance for the subscriptions and purchases.</li>
            <li>Online payment is the only method of payment for the products subscribed or purchased.</li>
            <li>Payment by Cash-on-Delivery method is not available.</li>
            <li>The Products are to be consumed within the specific expiry dates mentioned on the bottles and Vallechiara will not be responsible for any adverse effects <br />caused by non-compliance with the expiry date.</li>
            <li>Vallechiara will not be responsible for any damage and/or resultant quality issues occurred due to mishandling of the product by the customer.</li>
            <li>Partial return of delivered products is not allowed.</li>
            <li>The country of merchant Domicile is the United Arab Emirates.</li>
            <li>Vallechiara operates under the governing law of the United Arab Emirates.</li>
          </ol>

          {/* Cancellation & Refund Policy */}
          <h2 className={styles.sectionTitle}>Cancellation &amp; Refund Policy</h2>
          <p className={styles.paragraph}>
            Cancellation of an online order is possible within 24 hours from the time of placing the order. Customers will be refunded the full amount paid.
          </p>
          <p className={styles.paragraph}>
            If cancellation happens after 24 hours then AED.30 will be deducted and the remaining amount will be refunded.
          </p>
          <p className={styles.paragraph}>
            Cancellation of a subscription is possible within 24 hours from the time of placing the order. If a customer wants to cancel the subscription prematurely, refund will be done on a pro-rata basis with offsetting any discount that was availed.
          </p>
          <p className={styles.paragraph}>
            Refund of the paid amount is not allowed once the products are delivered to the customer.
          </p>
          <p className={styles.paragraph}>
            Any refund, if applicable will be to the credit/debit card using which the payment was made.
          </p>
          <p className={styles.paragraph}>
            The timeframe for the refunded amount to appear in the customer's account depends on the terms of the customer's bank.
          </p>

          {/* Privacy Policy */}
          <h2 className={styles.sectionTitle}>Privacy Policy</h2>
          <p className={styles.paragraph}>
            At Vallechiara we respect your right to privacy. Your name, email address and other identifying information that you give us will not be revealed to any of the direct marketers who rent our list. Should we ever change our policy, you will be given the chance to remove yourself from our list before your information is disclosed. By enrolling for any subscriptions or purchasing any product through Vallechiara website, you acknowledge and agree that this Privacy Policy applies to all services offered by us through Vallechiara website, but excludes services and websites that have separate privacy policies that do not incorporate this Privacy Policy.
          </p>

          {/* How we define personal information */}
          <h2 className={styles.sectionTitle}>How we define personal information</h2>
          <p className={styles.paragraph}>
            Personal information is any information that is specific to a particular customer. We may collect your personal information such as:
          </p>
          <ul className={styles.bulletList}>
            <li>Name, gender, date of birth, Emirates ID number/passport number.</li>
            <li>Billing address, Mobile number, email address.</li>
            <li>Debit or credit card details.</li>
            <li>Information on subscriptions or products purchased by you.</li>
            <li>Demographic information.</li>
            <li>The channel you chose to purchase our products or services.</li>
            <li>Communications with us through our website, call centre, emails, mobile application and social media channels.</li>
            <li>Account information such as your billing history, the services you use and anything else relating to your account.</li>
            <li>Any other information we need to provide you with a particular service.</li>
          </ul>
          <p className={styles.paragraph}>
            If you give us personal information about another person that we have requested in relation to the provision of a service, you are responsible for ensuring that they know and agree to us keeping records about them and that we will process their personal information in accordance with this Privacy Policy.
          </p>

          {/* How your personal information is used */}
          <h2 className={styles.sectionTitle}>How your personal information is used</h2>
          <p className={styles.paragraph}>
            We collect and use personal information to help us manage your account:
          </p>
          <ul className={styles.bulletList}>
            <li>To confirm and process your subscription or delivery.</li>
            <li>To validate you as a registered customer when using our services or when calling our Call Centre.</li>
            <li>To manage your account with us to track your progress.</li>
            <li>To tell you about any new offers or developments with our services.</li>
            <li>To respond to any questions or concerns you may have.</li>
            <li>To comply with applicable laws, regulations, court orders, government and law enforcement agencies' requests.</li>
            <li>To ensure security for you and our staff.</li>
            <li>To prevent and detect criminal activity, fraud and misuse of or damage to our services.</li>
            <li>To carry out statistical analysis which may be shared with third parties, only in an anonymized form.</li>
          </ul>
          <p className={styles.paragraph}>
            We may monitor your use of the services and record any calls made to our call centre for control and regulatory purposes.
          </p>

          {/* Cookies */}
          <h2 className={styles.sectionTitle}>Cookies</h2>
          <p className={styles.paragraph}>
            We use cookies to improve your browsing experience. Cookies are little files that websites put on your device to provide you with a better, more personal and relevant experience online. Some cookies are essential for websites to work and others remember things about you to give you a better, more enjoyable experience online. By continuing to use our websites, you are agreeing to our use of cookies. Alternatively, you can manage them in your browser settings.
          </p>

          {/* Can We Share and Disclose */}
          <h2 className={styles.sectionTitle}>Can We Share and Disclose Your Personal Information</h2>
          <p className={styles.paragraph}>
            Your personal information may be shared with or transferred to trusted third parties (including delivery partners and suppliers who are integral to providing some of our services). By subscribing to or purchasing any product you agree that we may share your personal information in such manner.
          </p>
          <p className={styles.paragraph}>
            We may also disclose your personal information to third parties if we are under a duty to disclose or share your personal information in order to comply with any legal obligation or to protect the rights, property, or safety of our customers or others.
          </p>

          {/* Our Direct Marketing Activities */}
          <h2 className={styles.sectionTitle}>Our Direct Marketing Activities</h2>
          <p className={styles.paragraph}>
            Vallechiara may from time to time contact you by mail or by electronic means (telephone call, email, SMS, Whatsapp etc.) with information about services, promotional offers and communication which may be of interest to you.
          </p>
          <p className={styles.paragraph}>
            Vallechiara understands that some of you may not wish to receive promotional messages or calls anymore. In that case, you can unsubscribe to our alerts.
          </p>
          <p className={styles.paragraph}>
            We respect your privacy. Transactional messages from Vallechiara such as registration, delivery notification, payment confirmation etc. are not subject to blocking.
          </p>

          {/* How You Can Access Your Information */}
          <h2 className={styles.sectionTitle}>How You Can Access Your Information</h2>
          <p className={styles.paragraph}>
            You agree to provide us accurate personal information at all times and you will notify us promptly upon any changes to your personal information. This is for us to ensure prompt delivery of services.
          </p>

          {/* Login Details */}
          <h2 className={styles.sectionTitle}>Login Details</h2>
          <p className={styles.paragraph}>
            Vallechiara will let you access to our services by logging into vallechiara.ae website:
          </p>
          <ul className={styles.bulletList}>
            <li>Using your email id as username and a password provided from your end</li>
            <li>Using your mobile number and the OTP received on the mobile number</li>
            <li>Using linked logins such as: Gmail, Facebook, Apple</li>
          </ul>
          <p className={styles.paragraph}>
            Vallechiara will not be responsible for any loss you may suffer as a result of the misuse of above access methods.
          </p>

          {/* How do we secure */}
          <h2 className={styles.sectionTitle}>How do we secure and protect your personal information</h2>
          <p className={styles.paragraph}>
            We do our best to protect your personal details and other information about your account and use security measures to prevent any compromise of your personal information, including storing your account details and personal information on secure servers.
          </p>

          {/* Updating our Privacy Policy */}
          <h2 className={styles.sectionTitle}>Updating our Privacy Policy</h2>
          <p className={styles.paragraph}>
            Any changes we make to our Privacy Policy in the future will be posted on our website and shall be effective from that date. Please check our website regularly to see any changes to our Privacy Policy. By continuing to use our services you acknowledge and agree to those changes.
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
