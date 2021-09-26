import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/ducks/data";
import { container } from "../styles/statistics.scss";
import Graphs from "../components/charts/Graphs";

const Statistics = () => {
  const [gnomes, setGnomes] = useState();

  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.data.data);
  const gnomeData = fetchData && fetchData.Brastlewark;

  useEffect(() => {
    dispatch(getData());
    setGnomes(gnomeData);
  }, [dispatch, gnomeData]);

  return (
    <div className={container}>
      <Graphs gnomes={gnomes} />
    </div>
  );
};

export default Statistics;
