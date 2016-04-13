import React from "react";
import sampler from "../sampler"

const play = () => {
  sampler.play('kick')
  console.log('ding!')
}

export default React.createClass({
  getInitialState: function() {
    return { active: this.props.active }
  },
  handleChange: function(event) {
    this.setState({ active: event.target.checked });
  },
  render: function() {
    if (this.props.current && this.state.active) play()
    return <li className={ this.props.current ? 'current' : '' }><input type="checkbox" onChange={this.handleChange} defaultChecked={ this.state.active } /></li>
  }
});
