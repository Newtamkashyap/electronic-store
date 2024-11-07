import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 1,
    name: 'Laptop',
    description: 'A powerful laptop with a 16GB RAM and 1TB SSD',
    price: 9999,
    image: 'images/electronic.jpg',
    details: 'This laptop is perfect for gaming and productivity.',
  },


);

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.details}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
