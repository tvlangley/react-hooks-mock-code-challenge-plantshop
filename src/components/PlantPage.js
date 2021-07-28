import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const onSearchData = searchTerm => {
    setSearchValue(searchTerm)
  }

  const onNewPlant = plantObject => {
    setPlants([...plants, plantObject])
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant} />
      <Search plants={plants} onSearchData={onSearchData} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
