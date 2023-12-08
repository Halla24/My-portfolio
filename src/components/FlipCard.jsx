import React from 'react';
import styles from '../styles/flip-card.module.css';

const FlipCard = () => {
  return (
    <div className={styles['flip-card']}>
      <div className={styles['flip-card-inner']}>
        <div className={`${styles['flip-card-front']} shadow-xl`}></div>
        <div className={`${styles['flip-card-back']} shadow-xl`}></div>
      </div>
    </div>
  );
};

export default FlipCard;
