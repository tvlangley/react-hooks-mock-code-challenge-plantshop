import React, { useState } from "react";
import PlantList from "./PlantList";

function NewPlantForm({plants, setPlants}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitted")
    // post request (persistence)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "image": image,
        "price": price
      })
    })
    .then(res => res.json())
      // update plants state
    .then(data => setPlants([...plants, data]))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={(event) => setImage(event.target.value)} type="text" name="image" placeholder="Image URL" />
        <input value={price} onChange={(event) => setPrice(event.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
