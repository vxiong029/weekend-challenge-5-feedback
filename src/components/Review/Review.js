import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// Route imports
import {withRouter} from 'react-router-dom';
// Styling imports
import Button from '@material-ui/core/Button';

class Review extends Component {
  // all feedback must be filled
  feedbackComplete = () => {
    const feedbackAnswers = this.props.reduxStore.feedback;
    return (feedbackAnswers.feeling > 0 
      && feedbackAnswers.understanding > 0 
      && feedbackAnswers.support > 0 
      && feedbackAnswers.comments !== '' 
      && feedbackAnswers.comments !== undefined
    );
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
    // push to submit page component - needs withRouter 
    this.props.history.push('/5');
  }
  render() {
      let feedbackAnswers = this.props.reduxStore.feedback;
    return (
      <div className="review">
        <fieldset className="rating">
          <legend>Overview:</legend>
            <p>Feeling: {feedbackAnswers.feeling}</p>
            <p>Understanding: {feedbackAnswers.understanding}</p>
            <p>Support: {feedbackAnswers.support}</p>
            <p>Comments: {feedbackAnswers.comments}</p>
          {this.feedbackComplete() && <h4>
            You've completed the form, please submit!
            </h4>}
          <Button onClick={() => this.submitHandle(this.props.reduxStore.feedback)}
            disabled={!this.feedbackComplete()}>Submit</Button>
        </fieldset>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default withRouter(connect(mapStateToProps)(Review));