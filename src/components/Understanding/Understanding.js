import React, {Component} from 'react';
import {connect} from 'react-redux';
// Styling imports
import Typography from '@material-ui/core/Typography';

class Understanding extends Component {
  // set state
  state = {
    understanding: '5'
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  setUnderstanding = () => {
    this.props.dispatch({
      type: 'SET_UNDERSTANDING',
      payload: this.state
    });
    // pushes the user to next page 
    this.props.history.push('/3');
  }
  render() {
    return (
      <div>
        <Typography variant="h4">Understanding</Typography>
      <label>
        How well are you understanding the content?
        <fieldset className="rating">
          <legend>Please rate:</legend>
            <p>
              <input type="radio" id="star5" name="feeling" value="5" 
                onChange={this.handleChange}
                checked={this.state.feeling === '5'} />
                <label title="Rocks!">5 stars</label>
            </p>
            <p>
              <input type="radio" id="star4" name="feeling" value="4" 
                onChange={this.handleChange}
                checked={this.state.feeling === '4'} />
                <label title="Pretty good">4 stars</label>
            </p>
            <p>
              <input type="radio" id="star3" name="feeling" value="3" 
                onChange={this.handleChange}
                checked={this.state.feeling === '3'} />
                <label title="Meh">3 stars</label>
            </p>
            <p>
              <input type="radio" id="star2" name="feeling" value="2" 
                onChange={this.handleChange}
                checked={this.state.feeling === '2'} />
                <label title="Kinda bad">2 stars</label>
            </p>
            <p>
              <input type="radio" id="star1" name="feeling" value="1" 
                onChange={this.handleChange}
                checked={this.state.feeling === '1'} />
                <label title="Sucks big time">1 star</label>
            </p> 
          <button onClick={this.setUnderstanding}>Next</button>
        </fieldset>
        
      </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Understanding);