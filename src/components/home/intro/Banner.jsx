import React from "react";
import { container, text, button } from "./banner.module.scss";
import Button from "../../utils/button/Button";

const Banner = () => {
  return (
    <div className={container}>
      <div className={text}>
        <h1>
          Hey AXA heroes! <br /> I know you just arrived to Brastlewark and
          there's no time to waste!
        </h1>
        <h2>
          In this app you'll find relevant information of all these little
          fellas that you will find in this town.
        </h2>
      </div>
      <div className={button}>
        <Button path="/population">See Gnomes population</Button>
      </div>
    </div>
  );
};

export default Banner;
