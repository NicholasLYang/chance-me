import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import appHistory from "tools/appHistory";
import MainApp from "./core/components/MainApp";
import ConnectedRouter from "react-router-redux/ConnectedRouter";
import store from "../store";
import CreateSchoolPage from "./form/components/CreateSchoolPage";
import HomePage from "./core/components/HomePage";
import { Switch } from "react-router-dom";
import SchoolPage from "./core/components/SchoolPage";

class RoutingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
          <MainApp>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/schools/new" component={CreateSchoolPage} />
              <Route path="/schools/:slug" component={SchoolPage} />
            </Switch>
          </MainApp>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default RoutingApp;
