import React from "react";
import Preview from "../views/Preview";
import HomeTwo from "../views/all-home-version/HomeTwo";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeTwo} />          
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
