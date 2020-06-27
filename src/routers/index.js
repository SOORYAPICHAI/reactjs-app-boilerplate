import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { routes } from "./routes";
import {MyFirstComponent} from "components/index"
const Auth = () => {
  return (
    <Router>
      <Route path={routes.home} component={MyFirstComponent}></Route>
    </Router>
  );
};

export default Auth