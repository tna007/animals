import React from "react";

import { Link } from "react-router-dom";

function AnimalCard({ name, link, img, desc, aclass }) {
  // limit paragraph character function using string method
  const truncate = (str, no_words) => {
    return str.split("").splice(0, no_words).join("");
  };
  return (
    <div className="post">
      <h2>{name}</h2>
      <img src={img} alt={name}></img>
      <em>{aclass.toUpperCase()}</em>
      <p>{truncate(desc, 72)}</p>
      <Link to={`/${link}`}>More</Link>
      {/* <a href={link}>More</a> */}
    </div>
  );
}

export default AnimalCard;
