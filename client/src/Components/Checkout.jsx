import React, { useEffect, useState } from 'react';
import './Checkout.css'; // Import your Checkout component-specific styles

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from session storage
    const storedCart = JSON.parse(sessionStorage.getItem('main')) || [];
    setCartItems(storedCart);
  }, []);

  // Function to calculate total amount
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Function to calculate discount (if applicable)
  const calculateDiscount = () => {
    // Example: Apply a 10% discount if total amount is greater than $100
    const totalAmount = calculateTotal();
    const discountThreshold = 100;
    const discountPercentage = 10; // 10% discount

    if (totalAmount > discountThreshold) {
      return (totalAmount * (discountPercentage / 100)).toFixed(2);
    }
    return 0;
  };

  // Function to handle checkout (dummy function for demonstration)
  const handleCheckout = () => {
    window.location.href = '/sp';    // Add logic to proceed with checkout, e.g., post data to backend
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart-items">
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId}>
              <div>
                <h4>{item.title}</h4>
                <p>SKU: {item.sku}</p>
              </div>
              <div>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="checkout-summary">
        <div>
          <p>Total Amount: ${calculateTotal()}</p>
          <p>Discount: ${calculateDiscount()}</p>
          <hr />
          <p>Total to Pay: ${(calculateTotal() - calculateDiscount()).toFixed(2)}</p>
        </div>
        <div>
          <button onClick={handleCheckout}>Checkout</button>
          {/* <button onClick={() => sessionStorage.removeItem('main')}>Clear Cart</button> */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
