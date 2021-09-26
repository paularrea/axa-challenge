import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout/layout";
import Population from "../pages/population";
import DetailPage from "../pages/detailPage";
import Statistics from "../pages/statistics";

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
          <RouteWrapper exact path="/" component={Home} layout={Layout} />
          <RouteWrapper exact path="/population" component={Population} layout={Layout} />
          <RouteWrapper path="/population/:gnomId" component={DetailPage} layout={Layout} />
          <RouteWrapper exact path="/statistics" component={Statistics} layout={Layout} />
        </Switch>
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
