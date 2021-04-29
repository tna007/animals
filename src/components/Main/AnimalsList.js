import React from "react";

import AnimalCard from "./AnimalCard";

function AnimalsList({ animals }) {
  return (
    <div className="posts">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          desc={animal.desc}
          aclass={animal.aclass}
          link={animal.id}
          img={animal.img}
        />
      ))}
    </div>
  );
}

export default AnimalsList;
