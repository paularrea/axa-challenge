import React from "react";
import GnomeCard from "../list/gnomeCard/gnomeCard";
import { Grid, Row, Col } from "react-flexbox-grid";
import { container, flex, text_box } from "./filtration.module.scss";

const Filtration = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }} className={container}>
      <div className={text_box}>
        <h2 style={{ color: props.textColor }}>{props.title}</h2>
        <p>{props.text}</p>
        <br />
        <span>Swip left to see more!</span>
      </div>

      <section className={flex}>
        {props.gnomeFiltration.map((gnome) => (
          <Grid>
            <Row>
              <Col
                key={gnome.id}
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
            </Row>
          </Grid>
        ))}
      </section>
    </div>
  );
};

export default Filtration;
