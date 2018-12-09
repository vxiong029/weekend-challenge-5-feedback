import React, {Component} from 'react';
import {connect} from 'react-redux';

class Support extends Component {
  // send this back to beginning
  restartClick = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <label>
        Thank You!
        <button onClick={this.restartClick}>Leave Another Feedback</button>
      </label>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Support);