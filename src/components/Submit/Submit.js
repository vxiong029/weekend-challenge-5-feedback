import React, {Component} from 'react';
import {connect} from 'react-redux';
// Styling imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Support extends Component {
  // send this back to beginning
  restartClick = () => {
    this.props.history.push('/');
    this.props.dispatch({type: 'RESET_FEEDBACK'});
  }
  render() {
    return (
      <div>
        <Typography variant="h4">Submit</Typography>
        <label>
          Thank You!
          <fieldset className="rating">
              <p>Thank you for your participation. Your feedback means a lot!</p>
            <Button onClick={this.restartClick}>Leave Another Feedback</Button>
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