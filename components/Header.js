import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <img src="/images/logo.jpg" alt="School Logo" className={styles.logo} />
      <div className={styles.new}>
        <h1 className={styles.schoolName}>Footies Sports academy</h1>
        <p className={styles.address}> Bangalore</p>
      </div>
    </header>
  );
}

export default Header;

