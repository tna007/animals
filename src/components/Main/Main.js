import React, { useState, useEffect } from "react";

import AnimalsList from "./AnimalsList";
import NewAnimal from "./NewAnimal";
import axios from "axios";

const Main = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((resp) => setAnimals(resp.data));
  }, []);

  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "mamals",
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
    axios
      .post("http://localhost:3001/animals", newAnimal)
      .then(() => axios.get("http://localhost:3001/animals"))
      .then((res) => setAnimals(res.data));
  };

  return (
    <main>
      <AnimalsList animals={animals} />
      <NewAnimal value={changeHandler} submit={sendData} />
    </main>
  );
};

export default Main;
