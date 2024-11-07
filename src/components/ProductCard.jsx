import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCart.css';
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image}/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>{product.details}</p>

      <Link to={`/product/${product.id} ${product.description}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
