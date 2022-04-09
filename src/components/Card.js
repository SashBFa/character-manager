import React from "react";

const Card = ({ element }) => {
  return (
    <li className="card">
      <h3 className="card__title">{element.name}</h3>
      <img
        className="card__img"
        src={"data:image/gif;base64," + element.image}
        alt={"picture" + element.name}
      />
      <p className="card__shortDescription">{element.shortDescription}</p>
    </li>
  );
};

export default Card;
