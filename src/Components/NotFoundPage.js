import React from "react";
import { Link } from "react-router";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found container">
        <h1>ERROR: 404</h1>
        <h2>This page does not exist</h2>
        <p><Link to="/Markdown-Previewer/">Go back</Link></p>
      </div>
    )
  }
}

module.exports = NotFoundPage;