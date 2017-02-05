import React from "react";

class Buttons extends React.Component {
  handleClick(toShow, toHide) {
    toShow.forEach(panel => {
      const style = document.getElementById(panel+"Container").style;
      style.display = "block";
      style.width = toShow.length === 1 ? "100%" : "48%";
    });
    if (toHide) {
      document.getElementById(toHide+"Container").style.display = "none";
    }
  }
  render() {
    return (
      <div className="buttons">
        <div id="showInput" className="button" onClick={() => this.handleClick(["editor"], "preview")}><p>Input</p></div>
        <div id="showBoth" className="button" onClick={() => this.handleClick(["editor", "preview"])}><p>Both</p></div>
        <div id="showOutput" className="button" onClick={() => this.handleClick(["preview"], "editor")}><p>Output</p></div>
        <div className="clear"></div>
      </div>
    );
  }
}

module.exports = Buttons;