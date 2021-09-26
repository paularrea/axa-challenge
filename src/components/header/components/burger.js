import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { MenuLinks } from "./MenuLinks";

const Burger = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Menu
      {...props}
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      <ul>
        {MenuLinks.map((item, index) => {
          return (
            <li key={index} className="">
              <NavLink
                onClick={() => {
                  closeMenu();
                }}
                onKeyDown={() => {
                  closeMenu();
                }}
                tabIndex={0}
                to={item.path}
                activeStyle=""
              >
                <div>
                  <p>{item.title}</p>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Menu>
  );
};

export default Burger;
