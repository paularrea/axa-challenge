import React from "react";
import Burger from "./components/burger";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import { navbar } from "./header.module.scss";
import { MenuLinks } from "./components/MenuLinks";
import "./components/burger.css";

const Header = () => {
  return (
    <div className={navbar}>
      <MediaQuery minWidth={870}>
        <NavLink to="/">GNOM FINDER</NavLink>
        <ul>
          {MenuLinks.map((item, index) => {
            return (
              <li key={index} className="">
                <NavLink to={item.path} activeStyle="">
                  <div>
                    <p>{item.title}</p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </MediaQuery>
      <MediaQuery maxWidth={870}>
        <NavLink to="/">GNOM FINDER</NavLink>
        <Burger />
      </MediaQuery>
    </div>
  );
};

export default Header;
