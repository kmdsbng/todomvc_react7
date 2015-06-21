import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

import TodoMvcPage from "../pages/todomvc/page";


export default class LoggedOutRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="main">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }

  static getRoutes = function() {
    return (
      <Route name="app" handler={LoggedOutRouter}>
        <Route path="/" handler={TodoMvcPage} />
        <Route path="/active" handler={TodoMvcPage} />
        <Route path="/completed" handler={TodoMvcPage} />
      </Route>
    );
  }
}
