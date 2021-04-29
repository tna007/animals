import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import AnimalsList from "./AnimalsList";
import NewAnimal from "./NewAnimal";
import AnimalSpa from "./AnimalSpa";

const Main = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((resp) => setAnimals(resp.data));
  }, []);

  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "Mamals",
    img: "",
    desc: "",
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
      <Switch>
        <Route path="/:id">
          <AnimalSpa />
        </Route>
        <Route path="/" exact>
          <AnimalsList animals={animals} />
          <NewAnimal value={changeHandler} submit={sendData} />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
