import React from "react";
import { button } from "./button.module.scss";

const Button = (props) => {
  return (
    <a data-testid="button" className={button} href={props.path}>
      {props.children}
    </a>
  );
};

export default Button;
