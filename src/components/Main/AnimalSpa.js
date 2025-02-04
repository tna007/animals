import axios from "axios";
import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";

function AnimalSpa() {
  const [animal, setAnimal] = useState();
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (!animal) {
      axios
        .get("http://localhost:3001/animals/" + id)
        .then((resp) => setAnimal(resp.data));
    }
  });

  let animalData;

  if (animal) {
    animalData = (
      <>
        <h1>{animal.name}</h1>
        <p>{animal.desc}</p>
        <img src={animal.img} alt={animal.name} />
        <p>
          <a href={animal.link} target="_blank" rel="noreferrer">
            Read more
          </a>
        </p>
        <button onClick={() => history.goBack()}>Back</button>
      </>
    );
  } else {
    animalData = <p>Loading...</p>;
  }

  return <div>{animalData}</div>;
}

export default AnimalSpa;
