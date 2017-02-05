import React from "react";
import marked from "marked";
const renderer = new marked.Renderer();
// Open links in new Tabs
renderer.link = function(href, title, text) {
  let out = '<a target="_blank" href="' + href + '"';
  if (title) { out += ' title="' + title + '"'; }
  out += '>' + text + '</a>';
  return out;
};
marked.setOptions({
  renderer: renderer,
  breaks: true
});

class MarkdownOutput extends React.Component {
  render() {
    return (
      <div className="panel">
        <h3 className="panelHeading">Output</h3>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.input)}}></div>
      </div>
    );
  }
}

module.exports = MarkdownOutput;