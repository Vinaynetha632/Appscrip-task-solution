"use client";

import React, { useState } from 'react';
import styles from './ProductCard.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} loading="lazy" className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title.toUpperCase()}</h3>
        <div className={styles.priceRow}>
          <span className={styles.priceLink}>
            <span className={styles.underline}>Sign in</span> or Create an account to see pricing
          </span>
          <button 
            className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`} 
            onClick={toggleLike}
            aria-label="Toggle Like"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isLiked ? "#eb4c6b" : "none"} stroke={isLiked ? "#eb4c6b" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
