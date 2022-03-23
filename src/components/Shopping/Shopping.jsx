import React, { useEffect, useState } from 'react';
import { addToDb, dataFromStorage } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Order from '../Order/Order';
import './Shopping.css';

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [orderData, setOrderData] = useState([]);

  const cartHandleClick = (id) => {
    addToDb(id);
    const data = dataFromStorage();
    setOrderData(data);
  };

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const savedData = dataFromStorage();
    const data = [];
    for (const id in savedData) {
      const foundData = products.find((product) => id === product.id);
      if (foundData) {
        savedData.quantity = savedData[id];
        data.push(foundData);
      }
    }
    setOrderData(data);
  }, [products]);
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
          <Order orderData={orderData}></Order>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
