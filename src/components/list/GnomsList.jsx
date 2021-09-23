import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GnomeCard from "./gnomeCard/gnomeCard";
import { container } from "./list.module.scss";
import { Grid, Row, Col } from "react-flexbox-grid";
import { getData } from "../../redux/ducks/data";

const GnomsList = () => {
  const [gnomes, setGnomes] = useState();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.data);

  const gnomeData = data && data.Brastlewark;

  useEffect(() => {
    dispatch(getData());
    setGnomes(gnomeData);
  }, [dispatch, gnomeData]);

  return (
    <div className={container}>
      <span>Brastlewark</span>
      <h2>Gnome population</h2>
      <Grid>
        <Row>
          {gnomes &&
            gnomes.map((gnome) => (
              <Col
                style={{
                  display: "flex",
                  jusifyContent: "center",
                  alignItems: "center",
                }}
                md={4}
                sm={12}
                xs={12}
              >
                <div>
                  <GnomeCard gnome={gnome} />
                </div>
              </Col>
            ))}
        </Row>
      </Grid>
    </div>
  );
};

export default GnomsList;
