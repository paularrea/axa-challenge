import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../redux/ducks/data";
import { container, text, info_box } from "../styles/pageDetail.module.scss";

const DetailPage = () => {
  const { gnomId } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(getData());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const gnomData = data && data.Brastlewark;
  const gnom =
    gnomData && gnomData.find((gnom) => JSON.stringify(gnom.id) === gnomId);

  return (
    <>
      {gnom && (
        <div className={container}>
          <section>
            <img src={gnom.thumbnail} alt="" />
          </section>
          <section className={text}>
            <span>Gnome name</span>
            <h1>{gnom.name}</h1>

            <div className={info_box}>
              <span>General information</span>
              <p>
                <b>age:</b> {gnom.age} years
              </p>
              <p>
                <b>hair color:</b> {gnom.hair_color}
              </p>
              <p>
                <b>weight:</b> {gnom.weight}
              </p>
              <p>
                <b>height:</b> {gnom.height}
              </p>
            </div>
            <div className={info_box}>
              <p>
                <span>Friends</span>

                {gnom.friends.length !== 0 ? (
                  gnom.friends.map((profesion) => {
                    return <li>{profesion}</li>;
                  })
                ) : (
                  <p>This gnome has no friends</p>
                )}
              </p>
            </div>
            <div className={info_box}>
              <p>
                <span>Professions</span>

                {gnom.professions.length !== 0 ? (
                  gnom.professions.map((profesion) => {
                    return <li>{profesion}</li>;
                  })
                ) : (
                  <p>This is a pretty lazy gnome and has no professions</p>
                )}
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default DetailPage;
