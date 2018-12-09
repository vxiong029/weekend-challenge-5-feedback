import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
  // set state to feeling
  state = {
    feeling: '5'
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
        <label>
          How are you feeling today?
          <fieldset class="rating">
            <legend>Please rate:</legend>
            <input type="radio" id="star5" name="feeling" value="5" 
              onChange={this.handleChange}
              checked={this.state.feeling === '5'} />
                <label for="star5" title="Rocks!">5 stars</label>
            <input type="radio" id="star4" name="feeling" value="4" 
              onChange={this.handleChange}
              checked={this.state.feeling === '4'} />
                <label for="star4" title="Pretty good">4 stars</label>
            <input type="radio" id="star3" name="feeling" value="3" 
              onChange={this.handleChange}
              checked={this.state.feeling === '3'} />
                <label for="star3" title="Meh">3 stars</label>
            <input type="radio" id="star2" name="feeling" value="2" 
              onChange={this.handleChange}
              checked={this.state.feeling === '2'} />
              <label for="star2" title="Kinda bad">2 stars</label>
            <input type="radio" id="star1" name="feeling" value="1" 
              onChange={this.handleChange}
              checked={this.state.feeling === '1'} />
              <label for="star1" title="Sucks big time">1 star</label>
          </fieldset>
          <button onClick={this.setFeeling}>Next</button>
        </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Feeling);