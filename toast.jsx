import React, { Component } from "react";
import { render } from "react-dom";
const $d = document;
class Toast extends Component {
  componentDidMount() {
    setTimeout(() => {
      $d.body.removeChild(this.props.dom);
    }, this.props.duration);
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          zIndex: 10000,
          bottom: "30%",
          left: "50%",
          transform: "translate(-50%,0)",
          background: "rgba(0,0,0,.7)",
          color: "#fff",
          fontSize: "16px",
          padding: "8px 16px",
          borderRadius: "8px",
        }}
      >
        <span>{this.props.msg}</span>
      </div>
    );
  }
}

export default (msg, duration) => {
  let dom = $d.createElement("div");
  duration = duration || 3500;
  $d.body.appendChild(dom);
  render(<Toast dom={dom} msg={msg} duration={duration} />, dom);
};
