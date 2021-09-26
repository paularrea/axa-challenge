import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  container,
  graph_container,
  flex_graph,
  legend,
} from "../graphs.module.scss";

const COLORS = ["red", "black", "green", "gray", "pink"];

const HairColor = ({ gnomes }) => {
  const onlyRedHair = (event) => {
    return event.hair_color === "Red";
  };
  const onlyBlackHair = (event) => {
    return event.hair_color === "Black";
  };
  const onlyGreenHair = (event) => {
    return event.hair_color === "Green";
  };
  const onlyGrayHair = (event) => {
    return event.hair_color === "Gray";
  };
  const onlyPinkHair = (event) => {
    return event.hair_color === "Pink";
  };

  const red = gnomes && gnomes.filter(onlyRedHair).length;
  const black = gnomes && gnomes.filter(onlyBlackHair).length;
  const green = gnomes && gnomes.filter(onlyGreenHair).length;
  const gray = gnomes && gnomes.filter(onlyGrayHair).length;
  const pink = gnomes && gnomes.filter(onlyPinkHair).length;

  const values = [
    { name: "Red", value: red },
    { name: "Black", value: black },
    { name: "Green", value: green },
    { name: "Gray", value: gray },
    { name: "Pink", value: pink },
  ];
  return (
    <div className={container}>
      <h2>Population by hair color</h2>
      <div className={graph_container}>
        <div className={flex_graph}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={values}
                cx="50%"
                cy="50%"
                labelLine={false}
                label
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {values.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className={legend}>
            <h3>Hair color</h3>
            <p style={{ color: "red" }}>Red: {red}</p>
            <p style={{ color: "black" }}>Black: {black}</p>
            <p style={{ color: "green" }}>Green: {green}</p>
            <p style={{ color: "gray" }}>Gray: {gray}</p>
            <p style={{ color: "pink" }}>Pink: {pink}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairColor;
