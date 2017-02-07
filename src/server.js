import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from 'react-router';
import routes from "./routes.js";
import NotFoundPage from "./Components/NotFoundPage.js";

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("./public"));

app.get("*", (req,res) => {
  match( {routes,location: req.url}, (err,redirectLocation, renderProps) => {
    if(err) return res.status(500).send(err.message);
    // Redirecting is not needed in this app:
    if(redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    // Create our React-HTML and pass it to the route
    let reactOutput;
    if (renderProps) {
      reactOutput = renderToString(<RouterContext {...renderProps} />);
    }
    else {
      reactOutput = renderToString(<NotFoundPage />);
      res.status(404);
    }
    // return the index-template (from index.ejs) and pass the reactOutput
    return res.render("index", {reactOutput});
  }); //end of match()...
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.info("Server running on port: " + port));