import React, {Component} from 'react';
import {connect} from 'react-redux';
// Styling imports
import Typography from '@material-ui/core/Typography';

class Comments extends Component {
  state = {
    comments: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  setComments = () => {
    this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: this.state
    });
    // pushes the user to next page 
    // this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <Typography variant="h4">Comments</Typography>
        <label>
          Any comments you want to leave?
          <fieldset className="rating">
            <legend>Comments:</legend>
              <textarea type="text" onChange={this.handleChange} name="comments" className="textarea"></textarea>
            <button onClick={this.setComments}>Done</button>
          </fieldset>
        </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Comments);