// utils/razorpay.js
export function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (typeof document !== 'undefined') {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject; // Handle script loading error
      document.body.appendChild(script);
    } else {
      // Handle the case when document is not available (e.g., during server-side rendering)
      reject(new Error("document is not defined"));
    }
  });
}

export function createRazorpayInstance(options) {
  if (typeof window !== 'undefined') {
    return new window.Razorpay(options);
  } else {
    // Handle the case when window is not available (e.g., during server-side rendering)
    throw new Error("window is not defined");
  }
}
