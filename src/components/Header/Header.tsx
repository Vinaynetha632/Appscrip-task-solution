import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <div className={styles.bannerItem}>
          <span className={styles.icon}>❖</span> Lorem ipsum dolor
        </div>
        <div className={`${styles.bannerItem} ${styles.hideMobile}`}>
          <span className={styles.icon}>❖</span> Lorem ipsum dolor
        </div>
        <div className={`${styles.bannerItem} ${styles.hideMobile}`}>
          <span className={styles.icon}>❖</span> Lorem ipsum dolor
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.leftSection}>
          <button className={styles.hamburger}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.8">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className={styles.logoIcon}>
            {/* Minimal Geometric logo */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="14" y="2" width="8" height="32" fill="#000" rx="4" />
              <rect x="2" y="14" width="32" height="8" fill="#000" rx="4" />
              <circle cx="18" cy="18" r="8" fill="#eb4c6b" />
            </svg>
          </div>
        </div>

        <div className={styles.centerSection}>
          <h1 className={styles.logoText}>LOGO</h1>
        </div>

        <div className={styles.rightSection}>
          <button className={styles.iconButton} aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <button className={styles.iconButton} aria-label="Wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button className={styles.iconButton} aria-label="Bag">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button className={`${styles.iconButton} ${styles.hideMobile}`} aria-label="Profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <div className={`${styles.languageSelector} ${styles.hideMobile}`}>
            <span>ENG</span>
            <span className={styles.arrowDown}>▼</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li><a href="#" className={styles.navLink}>SHOP</a></li>
          <li><a href="#" className={styles.navLink}>SKILLS</a></li>
          <li><a href="#" className={styles.navLink}>STORIES</a></li>
          <li><a href="#" className={styles.navLink}>ABOUT</a></li>
          <li><a href="#" className={styles.navLink}>CONTACT US</a></li>
        </ul>
      </nav>
      
      <div className={styles.headerDivider}></div>
      <div className={styles.breadcrumbMobile}>
        <span>HOME</span> <span className={styles.separator}>|</span> <span>SHOP</span>
      </div>
    </header>
  );
}
