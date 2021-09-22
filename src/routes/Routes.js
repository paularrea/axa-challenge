import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Layout from "../components/layout/layout";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={Home} layout={Layout} />
        <RouteWrapper
          exact
          path="/about"
          component={About}
          layout={Layout}
        />
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
