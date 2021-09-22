import React from "react";
import Header from "../header/Header";
import {page} from "./layout.module.scss"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className={page}>{children}</div>
    </>
  );
};

export default Layout;
