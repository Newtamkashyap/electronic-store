import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Laptop', description: 'A powerful laptop', price: 9999, image: 'images/electronic.jpg' },
    { id: 2, name: 'AC', description: 'A high-tech Ac', price: 1799, image: 'images/Ac.png' },
    { id: 3, name: 'Fridge', description: 'A high-tech Frideg', price: 7939, image: 'images/fridge.jpeg' },
    { id: 4, name: 'Smartphone', description: 'A high-tech smartphone', price: 4799, image: 'images/mobile.jpeg' },
    { id: 5, name: 'Iron', description: 'A high-tech iron', price: 37599, image: 'images/iron.jpeg' },
    { id: 6, name: 'Oven', description: 'A high-tech oven', price: 74499, image: 'images/oven.jpeg' },
    { id: 7, name: 'Washing Machine', description: 'A high-tech washingMachine', price: 10799, image: 'images/washingMachine.png' },
    { id: 8, name: 'Straigntner', description: 'A high-tech Straightner', price: 10799, image: 'images/straightener-iron.png' },


  
  ];

  return (
    <div>
      <h2>Featured Products</h2>
      <ProductList products={featuredProducts} />
    </div>
  );
};

export default Home;
