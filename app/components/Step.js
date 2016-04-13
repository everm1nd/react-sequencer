import React from "react";

export default React.createClass({
  render: function() {
    if (this.props.current && this.props.active) {
      console.log('ding!')
    }
    return <li className={ this.props.current ? 'current' : '' }><input type="checkbox" defaultChecked={ this.props.active } /></li>
  }
});
