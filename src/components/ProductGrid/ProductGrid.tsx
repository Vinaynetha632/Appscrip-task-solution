"use client";

import React, { useState } from 'react';
import styles from './ProductGrid.module.css';
import Sidebar from '../Sidebar/Sidebar';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [showFilters, setShowFilters] = useState(true);
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleFilterChange = (option: string) => {
    setSelectedCategories(prev => 
      prev.includes(option) ? prev.filter(c => c !== option) : [...prev, option]
    );
  };

  // Map Figma options to FakeStoreAPI categories safely
  const optionToApiMap: Record<string, string> = {
    'Men': "men's clothing",
    'Women': "women's clothing"
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    if (selectedCategories.length === 0) return true;
    
    // Check if product's category matches any selected category
    return selectedCategories.some(option => {
      const apiCat = optionToApiMap[option];
      return product.category === apiCat || option === product.category;
    });
  });

  // Duplicate to make grid look fuller
  const gridProducts = [...filteredProducts, ...filteredProducts, ...filteredProducts].slice(0, 50);

  // Sorting
  if (sortOption === "PRICE_HIGH_LOW") {
    gridProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "PRICE_LOW_HIGH") {
    gridProducts.sort((a, b) => a.price - b.price);
  }

  return (
    <div className={styles.gridContainer}>
      {/* Top Controller Bar */}
      <div className={styles.controllerBar}>
        <div className={styles.leftControls}>
          <span className={styles.itemCount}>{gridProducts.length} ITEMS</span>
          <button 
            className={(styles.filterToggleBtn)}
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <span className={styles.arrowLeft}>◄</span> : <span className={styles.arrowRight}>►</span>}
            <span className={styles.filterText}>{showFilters ? "HIDE FILTER" : "SHOW FILTER"}</span>
          </button>
        </div>

        <div className={styles.rightControls}>
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
            className={styles.sortDropdown}
          >
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="NEWEST_FIRST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE_HIGH_LOW">PRICE : HIGH TO LOW</option>
            <option value="PRICE_LOW_HIGH">PRICE : LOW TO HIGH</option>
          </select>
        </div>
        
        {/* Mobile Filter Button */}
        <button className={styles.mobileFilterBtn} onClick={() => setShowFilters(!showFilters)}>
          FILTER
        </button>
      </div>

      <div className={styles.divider}></div>

      {/* Main Content Area */}
      <div className={styles.contentLayout}>
        {showFilters && (
          <div className={styles.sidebarWrapper}>
            <Sidebar 
              selectedCategories={selectedCategories} 
              onFilterChange={handleFilterChange} 
            />
          </div>
        )}

        <div className={`${styles.productGrid} ${!showFilters ? styles.productGridExpanded : ''}`}>
          {gridProducts.map((p, i) => (
            <ProductCard key={`${p.id}-${i}`} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
