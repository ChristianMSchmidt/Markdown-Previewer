import React from "react";
import { Route, IndexRedirect } from "react-router";

/* Import the Components */
import Layout from "./Components/Layout.js";
import Previewer from "./Components/Previewer.js";
import NotFoundPage from "./Components/NotFoundPage.js";

const routes = (
  <Route path="/" component={Layout}>
      <IndexRedirect to="/previewer" />
      <Route path = "previewer" component={Previewer} />
      <Route path ="*" component={NotFoundPage} />
  </Route>
);

module.exports = routes;