import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.newsletterSection}>
            <h3 className={styles.footerTitle}>BE THE FIRST TO KNOW</h3>
            <p className={styles.footerText}>Sign up for updates from mettā muse.</p>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your e-mail..." required className={styles.emailInput} />
              <button type="submit" className={styles.subscribeButton}>SUBSCRIBE</button>
            </form>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.footerTitle}>CONTACT US</h3>
            <p className={styles.footerText}>+44 221 133 5360</p>
            <p className={styles.footerText}>customercare@mettamuse.com</p>

            <h3 className={`${styles.footerTitle} ${styles.mt24}`}>CURRENCY</h3>
            <div className={styles.currencyWrapper}>
              <div className={styles.flagIconSvg}>
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none"><rect width="24" height="16" fill="#fff" /><rect width="24" height="8" fill="#bc002d" /></svg>
              </div>
              <span className={styles.currencyDot}>•</span>
              <span className={styles.currencyText}>USD</span>
            </div>
            <p className={styles.smallNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>mettā muse</h3>
            <ul className={styles.footerList}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>QUICK LINKS</h3>
            <ul className={styles.footerList}>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>FOLLOW US</h3>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

            <h3 className={`${styles.footerTitle} ${styles.mt24}`}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <span className={styles.payIcon}>GPay</span>
              <span className={styles.payIcon}>MC</span>
              <span className={styles.payIcon}>PP</span>
              <span className={styles.payIcon}>Amex</span>
              <span className={styles.payIcon}>ApPay</span>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
