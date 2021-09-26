import React from "react";
import GnomAgeBarChart from "./components/age";
import HairColor from "./components/hairColor";
import {flex} from "./graphs.module.scss"

const Graphs = ({ gnomes }) => {
  return (
    <div className={flex}>
      <HairColor gnomes={gnomes} />
      <GnomAgeBarChart gnomes={gnomes} />
    </div>
  );
};

export default Graphs;
