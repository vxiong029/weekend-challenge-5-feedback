import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {
  // if any input is skipped cannot POST
  completeForm = () => {
    let feedbackAnswers = this.props.reduxStore.feedback;
    if( (feedbackAnswers.feeling > '0') || 
      (feedbackAnswers.understanding > '0') || 
      (feedbackAnswers.support > '0') || 
      (feedbackAnswers.comments !== '') 
      ) {
        return <button disabled>Incomplete Form</button>
      } else {
        return <button onClick={() => this.submitHandle(this.props.reduxStore.feedback)}>Submit</button>
      }
  }
  // POST to SERVER SIDE
  submitHandle = (answer) => {
    console.log('in submitHandle');
    axios.post('/submit', answer)
      .then(response => {
        console.log('was sent', response);
      }).catch(error => {
        console.log('error in submitHandle', error);
      })
    // push to submit page component
    this.props.history.push('/5');
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
        {this.completeForm()}
        {/* <button onClick={() => this.submitHandle(this.props.reduxStore.feedback)}>Submit</button> */}
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Review);