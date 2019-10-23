import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>peter-btn Demo</h1>
        <Example
          text="Button"
          onClick={() => {
            alert("fuck youuuu");
          }}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
