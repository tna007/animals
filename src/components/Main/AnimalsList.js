import React, { useState, useEffect } from "react";

import AnimalCard from "./AnimalCard";

import axios from "axios";

function AnimalsList(props) {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((resp) => setAnimals(resp.data));
  }, []);
  console.log(animals);
  return (
    <div>
      {animals.map((animal) => (
        <div key={animal.id}>
          <h1>{animal.name}</h1>
          <img src={animal.img}></img>
          <h4>{animal.aclass.toUpperCase()}</h4>
          <p>{animal.desc}</p>
          <a href={animal.link}>More</a>
        </div>
      ))}
    </div>
  );
}

export default AnimalsList;
