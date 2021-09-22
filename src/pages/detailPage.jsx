import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "../ContextData";

const DetailPage = () => {
  const { gnomId } = useParams();
  const { data } = useContext(ContextData);
  const gnomData = data && data.Brastlewark;
  const gnom =
    gnomData && gnomData.find((gnom) => JSON.stringify(gnom.id) === gnomId);

  console.log(gnom, "gnom");

  return (
    <div>
      <img src={gnom.thumbnail} alt="" />
      <h1>{gnom.name}</h1>
      <p>age: {gnom.age}</p>
      <p>hair color:{gnom.hair_color}</p>
      <p>weight: {gnom.weight}</p>
      <p>height: {gnom.height}</p>
      <p>
        Friends List
        {gnom.friends.map((friend) => {
          return <li>{friend}</li>;
        })}
      </p>
      <p>
        Professions
        {gnom.professions.map((profesion) => {
          return <li>{profesion}</li>;
        })}
      </p>
    </div>
  );
};

export default DetailPage;
