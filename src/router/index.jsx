import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clients from "../pages/home";
import ClientDetails from "../pages/client-detail";
import EditClient from "../pages/edit-client";

const RouterContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/client/:dni/edit" component={EditClient} />
        <Route exact path="/client/:dni" component={ClientDetails} />
        <Route exact path="/" component={Clients} />
      </Switch>
    </Router>
  );
}

export default RouterContainer;
