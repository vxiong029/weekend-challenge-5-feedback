import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: 0
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  setFeeling = () => {
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: this.state
    });
  }
  render() {
    return (
      <div>
        <label>
          How are you feeling today?
          <input type="number" onChange={this.handleChange} name="feeling" />
          <button onClick={this.setFeeling}>Next</button>
        </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Feeling);