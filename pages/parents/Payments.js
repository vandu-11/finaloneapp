// pages/payments.js
import React from "react";
import Header from "../../components/Header";
import RazorpayComponent from "../../components/RazorpayComponent";
import styles from "./Payments.module.css";
import Footer from "@/components/Footer";

function Payments() {
  return (
    <div>
      <div>
      <Header />
      <main className={styles.main}>
        <h3>Payments and Subscriptions</h3>
        <div>
          <RazorpayComponent amount={1000} /> {/* Replace with the desired amount */}
        </div>

      </main>
    </div>
    <div className={styles.footer}>
    <Footer />
    </div>
    </div>
  );
}

export default Payments;
