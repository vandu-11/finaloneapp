// pages/_app.js

import Head from 'next/head';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Add the Razorpay SDK script or other head elements */}
      </Head>
      <Component {...pageProps} />
    
    </>
  );
}

export default MyApp;
