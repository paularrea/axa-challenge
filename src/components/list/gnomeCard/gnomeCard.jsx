import React from "react";
import { Link } from "react-router-dom";
import { container } from "./card.module.scss";

const GnomeCard = ({ gnome }) => {
  return (
    <Link className={container} key={gnome.id} to={`/population/${gnome.id}`}>
      <img src={gnome.thumbnail} alt="gnome" />
      <h3>{gnome.name}</h3>
    </Link>
  );
};

export default GnomeCard;
