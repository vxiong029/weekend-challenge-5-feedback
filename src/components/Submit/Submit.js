import React, {Component} from 'react';
import {connect} from 'react-redux';

class Support extends Component {
  state = {
    feedback: []
  }
  // setSupport = () => {
  //   this.props.dispatch({
  //     type: 'SET_SUPPORT',
  //     payload: this.state
  //   });
  //   // pushes the user to next page 
  //   this.props.history.push('/4');
  // }
  render() {
    return (
      <label>
        Thank You!
        <button>Leave Another Feedback</button>
      </label>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Support);