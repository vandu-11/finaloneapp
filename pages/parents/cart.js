import React, { useState } from 'react';
import CartPage from '../../components/CartPage';

function Cart() {
  // Define the initial state for the shopping cart
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {/* Pass the shopping cart state and setter function to CartPage */}
      <CartPage selectedItems={cart} setCart={setCart} />
    </div>
  );
}

export default Cart;
