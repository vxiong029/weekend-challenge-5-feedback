import React, {Component} from 'react';
import {connect} from 'react-redux';
// Styling imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Feeling extends Component {
  // set state to feeling
  state = {
    feeling: 0
  }
  // when input field has data
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // send input field data to REDUX
  setFeeling = () => {
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: this.state
    });
    // pushes the user to next page 
    this.props.history.push('/2');
  }
  render() {
    return (
      <div>
        <Typography variant="h4">Feeling</Typography>
        <label>
          How are you feeling today?
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
            <Button onClick={this.setFeeling}>Next</Button>
          </fieldset>
        </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Feeling);