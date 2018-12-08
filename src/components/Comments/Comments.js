import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <label>
          Any comments you want to leave?
          <textarea type="text" onChange={this.handleChange} name="comments"></textarea>
          <button onClick={this.setComments}>Next</button>
        </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Comments);