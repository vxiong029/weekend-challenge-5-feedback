import React, {Component} from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: 0
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  setUnderstanding = () => {
    this.props.dispatch({
      type: 'SET_UNDERSTANDING',
      payload: this.state
    });
  }
  render() {
    return (
      <div>
      <label>
        How well are you understanding the content?
        <input type="number" onChange={this.handleChange} name="understanding" />
        <button onClick={this.setUnderstanding}>Next</button>
      </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Understanding);