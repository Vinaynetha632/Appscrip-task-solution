"use client";

import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const filterCategories = [
  { id: 'ideal-for', title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
  { id: 'occasion', title: 'OCCASION', options: ['Casual', 'Formal', 'Party'] },
  { id: 'work', title: 'WORK', options: ['Handmade', 'Machine Made'] },
  { id: 'fabric', title: 'FABRIC', options: ['Cotton', 'Silk', 'Linen'] },
  { id: 'segment', title: 'SEGMENT', options: ['Premium', 'Standard'] },
  { id: 'suitable', title: 'SUITABLE FOR', options: ['Summer', 'Winter'] },
  { id: 'raw', title: 'RAW MATERIALS', options: ['Organic', 'Synthetic'] },
  { id: 'pattern', title: 'PATTERN', options: ['Solid', 'Printed'] },
];

interface SidebarProps {
  selectedCategories: string[];
  onFilterChange: (category: string) => void;
}

export default function Sidebar({ selectedCategories, onFilterChange }: SidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'ideal-for': true, // Keep first one open by default
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <aside className={styles.sidebar}>
      {/* Customizable Checkbox */}
      <div className={styles.customizableRow}>
        <input type="checkbox" id="customizable" className={styles.checkbox} />
        <label htmlFor="customizable" className={styles.customizableLabel}>
          CUSTOMIZABLE
        </label>
      </div>

      <div className={styles.divider}></div>

      {/* Accordion Filters */}
      {filterCategories.map((category) => (
        <React.Fragment key={category.id}>
          <div className={styles.filterSection}>
            <div 
              className={styles.filterHeader} 
              onClick={() => toggleSection(category.id)}
            >
              <div className={styles.filterTitle}>
                <span className={styles.titleText}>{category.title}</span>
                <span className={styles.subtitleText}>All</span>
              </div>
              <div className={styles.icon}>
                {openSections[category.id] ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                )}
              </div>
            </div>
            
            {openSections[category.id] && (
              <div className={styles.filterBody}>
                <button className={styles.unselectAll}>Unselect all</button>
                <div className={styles.optionsList}>
                  {category.options.map(option => {
                    const optionId = `${category.id}-${option}`;
                    const isChecked = selectedCategories.includes(option);
                    return (
                      <div key={option} className={styles.optionRow}>
                        <input 
                          type="checkbox" 
                          id={optionId} 
                          className={styles.checkbox}
                          checked={isChecked}
                          onChange={() => onFilterChange(option)}
                        />
                        <label htmlFor={optionId}>{option}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className={styles.divider}></div>
        </React.Fragment>
      ))}
    </aside>
  );
}
