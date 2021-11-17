import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const displayPlants = plants.map(plantObject => <PlantCard key={plantObject.id} plant={plantObject} />)

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
