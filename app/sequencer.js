import React from "react";
import SequencerStep from "./sequencerStep";
import StepButton from "./stepButton";

export default React.createClass({
  render: function() {
    let steps = [];
    for (var i = 0; i < this.props.size; i++) {
      steps.push(<SequencerStep position={i} />);
    }
    return (
      <div className="sequencer">
        {steps}
        <StepButton />
      </div>
    );
  }
});
