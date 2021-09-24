import React from "react";
import Burger from "./components/burger";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import { navbar, abs_title, active } from "./header.module.scss";
import { MenuLinks } from "./components/MenuLinks";
import "./components/burger.css";

const Header = () => {
  return (
    <div className={navbar}>
      <MediaQuery minWidth={870}>
        <NavLink to="/">GNOME FINDER</NavLink>
        <ul>
          {MenuLinks.map((item, index) => {
            return (
              <li key={index} className=''>
                <NavLink exact to={item.path} activeStyle={{color:'red'}}>
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
        <NavLink className={abs_title} to="/">GNOME FINDER</NavLink>
        <Burger />
      </MediaQuery>
    </div>
  );
};

export default Header;
