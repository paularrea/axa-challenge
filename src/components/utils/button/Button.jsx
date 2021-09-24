import React from "react";
import { Link } from "react-router-dom";
import { button } from "./button.module.scss";

const Button = (props) => {
  return (
    <Link className={button} to={props.path}>
      {props.children}
    </Link>
  );
};

export default Button;
