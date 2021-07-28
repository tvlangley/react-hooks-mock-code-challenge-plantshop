import React, { useState } from "react";

function PlantCard({name, price, image}) {
  const [isInStock, setIsInStock] = useState(true)

  const handleToggleStock = () => {
     setIsInStock(isInStock => !isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
