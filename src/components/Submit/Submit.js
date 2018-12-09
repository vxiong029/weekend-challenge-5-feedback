import React, {Component} from 'react';
import {connect} from 'react-redux';
// Styling imports
import Typography from '@material-ui/core/Typography';

class Support extends Component {
  // send this back to beginning
  restartClick = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
      <Typography variant="h4">Submit</Typography>
      <label>
        Thank You!
        <fieldset className="rating">
            <lengend>Submit:</lengend>
            <p>Thank you for your participation. Your feedback means a lot!</p>
          <button onClick={this.restartClick}>Leave Another Feedback</button>
        </fieldset>
      </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Support);