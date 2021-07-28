import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [stockStatus, setStockStatus] = useState(true)

  const handleStockChange = () => {
    setStockStatus(!stockStatus)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockStatus ? (
        <button className="primary" onClick={handleStockChange}>In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
