/**
 * App entry point
 */

// Polyfill
import "babel-core/polyfill";

// Libraries
import React from "react";
import Router from "react-router";

// Common utilities
//import Session from "./common/session";

// Routers
import LoggedOutRouter from "./routers/logged_out";
//import LoggedInRouter from "./routers/logged_in";


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "todoapp";


// Initialize routes depending on session
let routes;

//if (Session.isLoggedIn()) {
//  routes = LoggedInRouter.getRoutes();
//} else {
  routes = LoggedOutRouter.getRoutes();
//}

// Start the router
Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(<Handler data={null} path={state.path} />, document.getElementById(DOM_APP_EL_ID));
});
