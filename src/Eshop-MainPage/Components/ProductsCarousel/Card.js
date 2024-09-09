import React from 'react';
import './ProductCard.css'
import iphone12 from './iphone.png';

function Card({ productName, productPrice }) {
  return (
    <div class="productcard">
    <img src={iphone12} alt="Product Image"/>
    <div class="productcard-content">
        <h2 class="productcard-title">{productName}</h2>
        <p class="productcard-description">This is a brief description of the product. It provides a short overview of what the product is and its main features.</p>
        <p class="productcard-price">₹{productPrice}</p>
        <button class="productcard-button">Add to Cart</button>
    </div>
</div>
  );
}

export default Card;
