import React from "react";
import { Route, IndexRoute } from "react-router";

/* Import the Components */
import Layout from "./Components/Layout.js";
import Previewer from "./Components/Previewer.js";
import NotFoundPage from "./Components/NotFoundPage.js";

const routes = (
  <Route path="/Markdown-Previewer/" component={Layout}>
      <IndexRoute component={Previewer} />
      <Route path ="/Markdown-Previewer/*" component={NotFoundPage} />
  </Route>
);

module.exports = routes;