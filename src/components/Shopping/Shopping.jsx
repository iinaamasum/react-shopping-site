import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Order from '../Order/Order';
import './Shopping.css';

const Shopping = () => {
  const [products, setProducts] = useState([]);

  const cartHandleClick = (id) => {};

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="separation">
      <h1 className="card__section">Shopping</h1>
      <div className="order__area">
        <div className="row">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              cartHandleClick={cartHandleClick}
            ></Card>
          ))}
        </div>
        <div className="order__details">
          <Order></Order>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
