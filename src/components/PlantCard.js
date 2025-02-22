import React, { useState } from 'react';

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);
  const { name, image, price } = plant;

  const handleClick = () => {
    setIsInStock(!isInStock);
  };
  return (
    <li className='card'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className='primary' onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
