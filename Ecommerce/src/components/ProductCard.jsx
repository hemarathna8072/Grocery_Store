import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <span className="discount-tag">{product.discount} OFF</span>
      <img src={product.image} alt={product.name} className="product-img" />
      <h3 className="product-name">{product.name}</h3>
    </div>
  );
};

export default ProductCard;
