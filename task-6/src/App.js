import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Costumers from "./pages/Costumers/costumers";
import CostumersAdd from "./pages/CostumersAddPage/costumersadd";
import CostumersActive from "./pages/CostumersActivePage/costumersactive";
import CostumersPassive from "./pages/CostumersPassivePage/costumerspassive";
import NavBar from "./components/Navbar/Navbar";
class Index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <NavBar />
            <Route exact path="/costumers" component={Costumers} />
            <Route exact path="/costumersadd" component={CostumersAdd} />
            <Route exact path="/costumersactive" component={CostumersActive} />
            <Route
              exact
              path="/costumerspassive"
              component={CostumersPassive}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Index;
