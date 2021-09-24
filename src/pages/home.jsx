import React from "react";
import Filtrations from "../components/filtration/FiltrationList";
import Banner from "../components/home/intro/Banner";
import { container } from "../styles/home.module.scss";

const Home = () => {
  return (
    <div className={container}>
      <Banner />
      <Filtrations />
    </div>
  );
};

export default Home;
