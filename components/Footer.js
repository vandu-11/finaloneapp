import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        {/* Your main content here */}
      </main>
      <footer className={styles.footer}>
        <div className={styles.new}>
          <p className={styles.paragraphStyles}>Email: example@example.com</p>
          <p className={styles.paragraphStyles}>Contact: +1 (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;