import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  if (!plant) return null;
  const { id, name, image, price, soldOut } = plant;

  const handleToggle = () => {
    if (onToggleSoldOut) {
      onToggleSoldOut(id);
    }
  };

  const formatPrice = (price) => {
    if (typeof price === "number") {
      // For whole numbers like 55, don't add decimal places
      return price % 1 === 0 ? price.toString() : price.toString();
    }
    return price.toString();
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {formatPrice(price)}</p>
      {!soldOut ? (
        <button className="primary" onClick={handleToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
