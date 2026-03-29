import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur. Amet est placerat placerat dictum fringilla volutpat.
        <br className={styles.hideMobile} />
        Blandit faucibus proin pulvinar et interdum.
      </p>
    </section>
  );
}
