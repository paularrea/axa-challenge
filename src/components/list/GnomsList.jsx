import React, { useState, useContext, useEffect } from "react";
import { ContextData } from "../../ContextData";
import { Link } from "react-router-dom";
// import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const GnomsList = () => {
  //   const [listItems, setListItems] = useState(
  //     Array.from(Array(50).keys(), (n) => n + 1)
  //   );
  //   const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [gnoms, setGnoms] = useState();
  const { data } = useContext(ContextData);

  const gnomData = data && data.Brastlewark;

  useEffect(() => {
    setGnoms(gnomData);
  }, [gnomData]);

  //   function fetchMoreListItems() {
  //     setTimeout(() => {
  //       setListItems((prevState) => [
  //         ...prevState,
  //         ...Array.from(Array(20).keys(), (n) => n + prevState.length + 1),
  //       ]);
  //       setIsFetching(false);
  //     }, 2000);
  //   }

  return (
    <>
      <ul>
        {gnoms &&
          gnoms.map((gnom) => (
            <Link key={gnom.id} to={`/population/${gnom.id}`}>{gnom.name}</Link>
            // <p>{gnom.name}</p>
          ))}
      </ul>
      {/* {isFetching && "Fetching more list items..."} */}
    </>
  );
};

export default GnomsList;
