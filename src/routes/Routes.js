import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ContextData } from "../ContextData";
import Home from "../pages/home";
import Layout from "../components/layout/layout";
import axios from "axios";
import Population from "../pages/population";
import DetailPage from "../pages/detailPage";
const Routes = () => {
  const [data, setData] = useState();

  const fetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => fetchData(), []);

  return (
    <BrowserRouter>
      <ContextData.Provider value={{ data, setData }}>
        <Switch>
          <RouteWrapper exact path="/" component={Home} layout={Layout} />
          <RouteWrapper exact path="/population" component={Population} layout={Layout} />
          <RouteWrapper path="/population/:gnomId" component={DetailPage} layout={Layout} />
        </Switch>
      </ContextData.Provider>
    </BrowserRouter>
  );
};

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default Routes;
