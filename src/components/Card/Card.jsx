import React from 'react';
import './Card.css';

const Card = (props) => {
  const { img, name, id, price, seller, ratings } = props.product;
  const cartHandleClick = props.cartHandleClick;

  return (
    <div className="col">
      <div className="">
        <img className="card__img" src={img} alt="" srcset="" />
      </div>
      <div className="name__price">
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
      </div>
      <div className="others__info">
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} stars</p>
        <button onClick={() => cartHandleClick(id)} className="add__cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
