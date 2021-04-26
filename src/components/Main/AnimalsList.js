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
    <div className="posts">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          desc={animal.desc}
          aclass={animal.aclass}
          link={animal.link}
          img={animal.img}
        />
      ))}
    </div>
  );
}

export default AnimalsList;
