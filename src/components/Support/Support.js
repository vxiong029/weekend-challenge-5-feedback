import React, {Component} from 'react';
import {connect} from 'react-redux';

class Support extends Component {
  state = {
    support: '5'
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  setSupport = () => {
    this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: this.state
    });
    // pushes the user to next page 
    this.props.history.push('/4');
  }
  render() {
    return (
      <label>
        How well are you being supported?
        <fieldset className="rating">
            <legend>Please rate:</legend>
            <input type="radio" id="star5" name="support" value="5" 
              onChange={this.handleChange}
              checked={this.state.support === '5'} />
                <label title="Rocks!">5 stars</label>
            <input type="radio" id="star4" name="support" value="4" 
              onChange={this.handleChange}
              checked={this.state.support === '4'} />
                <label title="Pretty good">4 stars</label>
            <input type="radio" id="star3" name="support" value="3" 
              onChange={this.handleChange}
              checked={this.state.support === '3'} />
                <label title="Meh">3 stars</label>
            <input type="radio" id="star2" name="support" value="2" 
              onChange={this.handleChange}
              checked={this.state.support === '2'} />
              <label title="Kinda bad">2 stars</label>
            <input type="radio" id="star1" name="support" value="1" 
              onChange={this.handleChange}
              checked={this.state.support === '1'} />
              <label title="Sucks big time">1 star</label>
          </fieldset>
        <button onClick={this.setSupport}>Next</button>
      </label>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(Support);