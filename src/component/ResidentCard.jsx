import React from "react";

const ResidentCard = ({ name, height, mass, gender }) => {
  return (
    <div className="resident-card">
      <h3>Name: {name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default ResidentCard;
