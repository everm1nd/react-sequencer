import React from "react";
import Step from "./Step"

export default React.createClass({
  getInitialState: function() {
    let steps = [];
    for (var i = 0; i < this.props.size; i++) steps[i] = { key: i, active: i % 4 == 0 };
    return { steps: steps }
  },
  render: function() {
    let result = this.state.steps.map((step) => {
      return <Step position={step.key} current={step.key == this.props.current} active={step.active} key={step.key} />
    })
    return <ul>{ result }</ul>
  }
});
