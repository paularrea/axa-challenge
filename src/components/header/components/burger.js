import React from "react"
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu"
import { MenuLinks } from "./MenuLinks"

const Burger = props => {
  return (
    <Menu {...props}>
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
    </Menu>
  )
}

export default Burger