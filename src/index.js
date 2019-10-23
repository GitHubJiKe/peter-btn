import React, { Component } from "react";
import "./style.css";
export default class extends Component {
  onClick = () => {
    console.log("default click function");
  };

  render() {
    const { text, onClick, style } = this.props;
    const _click = onClick || this.onClick;
    return (
      <button className="btn" onClick={_click} style={style}>
        {text}
      </button>
    );
  }
}
