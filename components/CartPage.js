import React, { useRef } from 'react';
import styles from './CartPage.module.css';
import RazorpayComponent from './RazorpayComponent';


function CartPage({ selectedItems, setCart }) {
  // Function to calculate the total amount
  function calculateTotalAmount(selectedItems) {
    return selectedItems.reduce((total, item) => {
      const itemTotal = (item.price || 0) * (item.quantity || 0);
      return total + itemTotal;
    }, 0);
  }

  // Create a ref for the RazorpayComponent
  const razorpayRef = useRef();

  const handleBuyNowClick = () => {
    // Call the handlePayment function using the ref
    razorpayRef.current.handlePayment();
  };

  const increaseQuantity = (item) => {
    const updatedCart = selectedItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity = (cartItem.quantity || 0) + 1;
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = selectedItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 0) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = selectedItems.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <div className={styles.cartItemImage}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.cartItemInfo}>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemPrice}>Price: ${item.price}</p>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityButton}
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
                <span className={styles.quantity}>{item.quantity || 0}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => decreaseQuantity(item)}
                >
                  -
                </button>
              </div>
              <p className={styles.itemTotal}>Total: ${item.price * (item.quantity || 0)}</p>
              <button className={styles.removeButton} onClick={() => removeFromCart(item)}>
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.buyNowButton} onClick={handleBuyNowClick}>
        Buy Now
      </button>

      {/* Integrate RazorpayComponent and pass the ref */}
      <RazorpayComponent ref={razorpayRef} amount={calculateTotalAmount(selectedItems)} />
    </div>
  );
}

export default CartPage;
