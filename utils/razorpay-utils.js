import { loadRazorpayScript, createRazorpayInstance } from '../utils/razorpay';

export const handlePayment = async (amount) => {
  try {
    const scriptLoaded = await loadRazorpayScript();

    if (scriptLoaded) {
      const razorpay = createRazorpayInstance({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      });

      const options = {
        amount: amount * 100, // Amount in paisa (multiply by 100 for INR)
        currency: 'INR',
        name: 'EDHa',
        description: 'Payment for your product',
      };

      razorpay.open(options);
    }
  } catch (error) {
    console.error('Error initializing Razorpay:', error);
  }
};
