import React, {Component} from 'react';
import {connect} from 'react-redux';

class Support extends Component {
  state = {
    support: 0
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  setSupport = () => {
    this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: this.state
    });
  }
  render() {
    return (
      <label>
        How well are you being supported?
        <input type="number" onChange={this.handleChange} name="support" />
        <button onClick={this.setSupport}>Next</button>
      </label>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Support);