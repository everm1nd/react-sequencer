import React from "react";

export default React.createClass({
  handleClick: function(event) {
    this.setState({});
  },
  render: function() {
    return (
      <input onClick={this.handleClick} type="button" value="Step" />
    );
  }
});
