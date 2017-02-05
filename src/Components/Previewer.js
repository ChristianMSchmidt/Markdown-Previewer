import React from "react";
import Buttons from "./Buttons.js";
import MarkdownInput from "./MarkdownInput.js";
import MarkdownOutput from "./MarkdownOutput.js";
import defaultString from "../Data/defaultString.js";


class Previewer extends React.Component {
  constructor() {
    super();
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      input: defaultString
    };
  }
  
  handleUserInput(e) {
    this.setState({
      input: e.target.value,
    });
  }
  
  render() {
    return (
      <div>
          <Buttons />
          <MarkdownInput handleUserInput={this.handleUserInput} input={this.state.input} />
          <MarkdownOutput input={this.state.input} />
      </div>
    );
  }
}

module.exports = Previewer;