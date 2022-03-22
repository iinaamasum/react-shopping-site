import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Shopping.css';

const Shopping = () => {
  const [products, setProducts] = useState([]);
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
            <Card key={product.id} product={product}></Card>
          ))}
        </div>
        <div className="order__details">
          <h1>hi, there</h1>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
