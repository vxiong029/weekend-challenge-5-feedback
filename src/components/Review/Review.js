import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {
  submitHandle = (answer) => {
    console.log('in submitHandle');
    axios.post('/submit', answer)
      .then(response => {
        console.log('was sent', response);
      }).catch(error => {
        console.log('error in submitHandle', error);
      })
  }
  render() {
      let feedbackAnswers = this.props.reduxStore.feedback;
    return (
      <div>
        <h2>Your Feedback</h2>
          <p>Feeling: {feedbackAnswers.feeling}</p>
          <p>Understanding: {feedbackAnswers.understanding}</p>
          <p>Support: {feedbackAnswers.support}</p>
          <p>Comments: {feedbackAnswers.comments}</p>
        <button onClick={() => this.submitHandle(this.props.reduxStore.feedback)}>Submit</button>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Review);