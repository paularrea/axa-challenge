import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { container, graph_container } from "../graphs.module.scss";

const GnomAgeBarChart = ({ gnomes }) => {
  const lessThan50 = gnomes && gnomes.filter((gnome) => gnome.age < 50).length;
  const FiftyTo100 =
    gnomes &&
    gnomes.filter((gnome) => gnome.age > 50 && gnome.age < 100).length;
  const HundredTo150 =
    gnomes &&
    gnomes.filter((gnome) => gnome.age > 100 && gnome.age < 150).length;
  const HundredFiftyTo200 =
    gnomes &&
    gnomes.filter((gnome) => gnome.age > 150 && gnome.age < 200).length;
  const TwoHundredTo250 =
    gnomes &&
    gnomes.filter((gnome) => gnome.age > 200 && gnome.age < 250).length;
  const TwoHundredFiftyTo300 =
    gnomes &&
    gnomes.filter((gnome) => gnome.age > 250 && gnome.age < 300).length;
  const moreThan300 =
    gnomes && gnomes.filter((gnome) => gnome.age > 300).length;

  const values = [
    { name: "Less than 50", gnomes: lessThan50 },
    { name: "50 to 100", gnomes: FiftyTo100 },
    { name: "100 to 150", gnomes: HundredTo150 },
    { name: "150 to 200", gnomes: HundredFiftyTo200 },
    { name: "200 to 250", gnomes: TwoHundredTo250 },
    { name: "250 to 300", gnomes: TwoHundredFiftyTo300 },
    { name: "More than 300", gnomes: moreThan300 },
  ];

  return (
    <div className={container}>
      <h2>Age population</h2>
      <div className={graph_container}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={values}
            margin={{
              top: 5,
              right: 30,
              left: 40,
              bottom: 50,
            }}
            barSize={50}
          >
            <XAxis
              dataKey="name"
              scale="point"
              label={{
                value: "Gnome population",
                position: "center",
                dy: 50,
              }}
              padding={{ left: 10, right: 10 }}
              dy={20}
            />
            <YAxis
              label={{
                value: "Years",
                angle: -90,
                position: "center",
                dx: -50,
              }}
              dx={-20}
            />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="gnomes"
              fill="#2ca6b6"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GnomAgeBarChart;
