import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// Redux imports
import { connect } from 'react-redux';

class App extends Component {
  state = {
    rating: ''
  }
  handleChange = (event) => {
    this.setState({
      rating: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

        <form onSubmit={this.handleSubmit}>
          <label>
            How are you feeling today?
            <input type="text" onChange={this.handleChange} name="feeling" />
          </label>
          <label>
            How well are you understanding the content?
            <input type="text" onChange={this.handleChange} name="understand" />
          </label>
          <label>
            How well are you being supported?
            <input type="text" onChange={this.handleChange} name="support" />
          </label>
          <label>
            Any comments you want to leave?
            <textarea type="text" onChange={this.handleChange} name="comments"></textarea>
          </label>
          <input type="submit" value="submit" />
        </form>
        <br />
      </div>
    );
  }
}
// allows us to access REDUX information as props
const mapStateToProps = reduxStore => ({

})
export default connect()(App);
