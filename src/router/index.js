import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "../pages/home";
import CustomerDetails from "../pages/customer-detail";
import EditCustomer from "../pages/edit-customer";

const RouterContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/customer/:dni/edit" component={EditCustomer} />
        <Route exact path="/customer/:dni" component={CustomerDetails} />
        <Route exact path="/" component={Customers} />
      </Switch>
    </Router>
  );
}

export default RouterContainer;
