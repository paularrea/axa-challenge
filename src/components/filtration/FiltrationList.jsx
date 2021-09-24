import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/ducks/data";
import Filtration from "./Filtration";

const FiltrationList = () => {
  const [gnomes, setGnomes] = useState();
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.data.data);
  const gnomeData = fetchData && fetchData.Brastlewark;

  useEffect(() => {
    dispatch(getData());
    setGnomes(gnomeData);
  }, [dispatch, gnomeData]);

  const someRedHair =
    gnomes && gnomes.filter((gnome) => gnome.hair_color === "Red").slice(0, 20);

  const someOldGnomes =
    gnomes && gnomes.filter((gnome) => gnome.age > 100).slice(0, 20);

  const list = [
    {
      title: "Danger!",
      text:
        " Be careful with these types of gnomes. Here you can picture some of them. These guys seem normal but they are not trustworthy. You will distinguish them by their red hair.",
      gnomeFiltration: someRedHair,
      bgColor: "#ff634741",
    },
    {
      title: "Take care of the old ones",
      text:
        "The ancient gnomes are very rare to see. They hide themselfs very well but show you some of them.",
      gnomeFiltration: someOldGnomes,
      bgColor: "#105f102a",
    },
  ];

  return (
    <>
      {gnomes &&
        list.map((filtration) => (
          <Filtration
            title={filtration.title}
            text={filtration.text}
            gnomeFiltration={filtration.gnomeFiltration}
            bgColor={filtration.bgColor}
          />
        ))}
    </>
  );
};

export default FiltrationList;
