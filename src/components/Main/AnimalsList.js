import React from "react";

import AnimalCard from "./AnimalCard";
// import NewAnimal from "./NewAnimal";

function AnimalsList({ animals }) {
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
