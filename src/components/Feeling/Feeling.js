import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
  // set state to feeling
  state = {
    feeling: 0
  }
  // when input field has data
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // send input field data to REDUX
  setFeeling = () => {
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: this.state
    });
    // pushes the user to next page 
    this.props.history.push('/2');
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