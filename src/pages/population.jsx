import React, { useState, useEffect } from "react";
import GnomsList from "../components/list/GnomsList";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/ducks/data";

const Population = () => {
  const [gnomes, setGnomes] = useState();

  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.data.data);
  const gnomeData = fetchData && fetchData.Brastlewark;

  useEffect(() => {
    dispatch(getData());
    setGnomes(gnomeData);
  }, [dispatch, gnomeData]);

  return (
    <div>
      <GnomsList gnomes={gnomes} />
    </div>
  );
};

export default Population;
