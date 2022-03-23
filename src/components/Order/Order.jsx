import React, { useState } from 'react';
import './Order.css';

const Order = (props) => {
  const { orderData } = props.orderData;
  const [products, setProducts] = useState([]);

  const foundData = products.find((product) => orderData === product.id);
  for (const data in foundData) {
    console.log(data);
  }

  return (
    <div className="order__section">
      <h1>Order Summary</h1>
      <div className="order__pay">
        <p>Selected Items: 6</p>
        <p>Total Price: $1140</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114</p>
        <h3>Grand Total: $1559</h3>
      </div>
    </div>
  );
};

export default Order;
