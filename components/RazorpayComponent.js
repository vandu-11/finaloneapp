import React, { Component } from 'react';
import { loadRazorpayScript, createRazorpayInstance } from '../utils/razorpay';
import styles from './RazorpayComponent.module.css';

class RazorpayComponent extends Component {
  state = {
    paymentId: null,
  };

  handlePayment = async () => {
    try {
      const scriptLoaded = await loadRazorpayScript();

      if (scriptLoaded) {
        const razorpay = createRazorpayInstance({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        });

        const options = {
          amount: this.props.amount * 100, // Amount in paisa (multiply by 100 for INR)
          currency: 'INR',
          name: 'EDHa',
          description: 'Payment for your product',
          handler: function (response) {
            this.setState({ paymentId: response.razorpay_payment_id });
          }.bind(this), // Bind the handler to access the component's state
        };

        razorpay.open(options);
      }
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
    }
  };

  componentDidMount() {
    loadRazorpayScript();
  }

  render() {
    return (
      <div className={styles.button}>
        <button onClick={this.handlePayment}>Pay Now</button>
        {this.state.paymentId && <p>Payment ID: {this.state.paymentId}</p>}
      </div>
    );
  }
}

export default RazorpayComponent;
