import React from "react";

class MarkdownInput extends React.Component {
  render() {
    return (
      <div className="panel" id="editorContainer">
        <h3 className="panelHeading">Input</h3>
        <textarea id="editor" onChange={this.props.handleUserInput} type="text" value={this.props.input}></textarea>
      </div>
    );
  }
}

module.exports = MarkdownInput;