/*
 *  The actual custom "Layout" for the App 
 *  "this.props.children" will be replaced by the rendered Component
 *  which comes from "routes.js"
 */

import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1 id="siteHeading">Markdown Previewer</h1>
        <div id="container" className ="app-content">
          {this.props.children}
        </div>
        <div id="links">
		      <a href="https://github.com/SehrOne/Markdown-Previewer" target="_blank" title="Github-Repo">
		        <i aria-hidden="true" className="fa fa-github fa-4x"></i>
		      </a> 
		      <a href="https://www.freecodecamp.com/sehrone" target="_blank" title="FreeCodeCamp-Profile">
		        <i aria-hidden="true" className="fa fa-free-code-camp fa-4x"></i>
		      </a>
	      </div>
      </div>
    );
  }
}

module.exports = Layout;