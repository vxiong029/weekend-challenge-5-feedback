import React, {Component} from 'react';
import {connect} from 'react-redux';

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
      <label>
        How well are you understanding the content?
        <fieldset class="rating">
            <legend>Please rate:</legend>
            <input type="radio" id="star5" name="understanding" value="5" 
              onChange={this.handleChange}
              checked={this.state.understanding === '5'} />
                <label for="star5" title="Rocks!">5 stars</label>
            <input type="radio" id="star4" name="understanding" value="4" 
              onChange={this.handleChange}
              checked={this.state.understanding === '4'} />
                <label for="star4" title="Pretty good">4 stars</label>
            <input type="radio" id="star3" name="understanding" value="3" 
              onChange={this.handleChange}
              checked={this.state.understanding === '3'} />
                <label for="star3" title="Meh">3 stars</label>
            <input type="radio" id="star2" name="understanding" value="2" 
              onChange={this.handleChange}
              checked={this.state.understanding === '2'} />
              <label for="star2" title="Kinda bad">2 stars</label>
            <input type="radio" id="star1" name="understanding" value="1" 
              onChange={this.handleChange}
              checked={this.state.understanding === '1'} />
              <label for="star1" title="Sucks big time">1 star</label>
          </fieldset>
        <button onClick={this.setUnderstanding}>Next</button>
      </label>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Understanding);