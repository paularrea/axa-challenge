import React, { useState, useContext, useEffect } from "react";
import { ContextData } from "../../ContextData";
import GnomeCard from "./gnomeCard/gnomeCard";
import {container} from "./list.module.scss"
import { Grid, Row, Col } from "react-flexbox-grid";

const GnomsList = () => {
  const [gnomes, setGnomes] = useState();
  const { data } = useContext(ContextData);

  const gnomeData = data && data.Brastlewark;

  useEffect(() => {
    setGnomes(gnomeData);
  }, [gnomeData]);

  return (
    <div className={container}>
      <span>Brastlewark</span>
      <h2>Gnome population</h2>
      <Grid>
        <Row>
          {gnomes && gnomes.map((gnome) => (
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
