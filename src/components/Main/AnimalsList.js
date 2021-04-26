import React, { useState, useEffect } from "react";

import AnimalCard from "./AnimalCard";
import NewAnimal from "./NewAnimal";

import axios from "axios";

function AnimalsList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((resp) => setAnimals(resp.data));
  }, []);

  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "",
    img: "",
    desc: "",
    link: "",
  });

  const changeHandler = (e) => {
    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
    console.log(newAnimal);
  };

  const sendData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/animals", newAnimal);
  };

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
      <NewAnimal value={changeHandler} submit={sendData} />
    </div>
  );
}

export default AnimalsList;
