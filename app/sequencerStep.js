import React from "react";

export default React.createClass({
  getInitialState: function() {
    return { current: this.props.position == 0 };
  },
  render: function() {
    let className = "";
    if (this.state.current == true) {
      className = "current ";
    }
    return (
      <span className={className}>
        <input type="checkbox" />
      </span>
    );
  }
});
