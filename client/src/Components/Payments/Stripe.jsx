import React, { useState, useEffect } from "react";
import StripeContainer from "./StripeContainer";
import "./Stripe.css";

function Stripe() {
  const [showItem, setShowItem] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const cartData = sessionStorage.getItem("main");
    if (cartData) {
      setData(JSON.parse(cartData));
    }
  }, []);

  const calculateTotal = () => {
    return data.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="App user-item">
      <h1>Ecom Total Purchase of Products ,Please Click pay button to pay using stripe API</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>Total Amount: ${calculateTotal()}</h3>
          <button onClick={() => setShowItem(true)}>Purchase Spatula</button>
        </>
      )}
    </div>
  );
}

export default Stripe;
