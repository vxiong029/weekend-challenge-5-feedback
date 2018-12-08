import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// Redux imports
import {connect} from 'react-redux';
// Router imports


class App extends Component {
  state = {
     rating: ''
  }
  handleChange = (event) => {
    this.setState({
      rating: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handle submit');
    this.props.dispatch({type: 'SET_FEEDBACK'});
  }
  // setFeeling = () => {
  //   this.props.dispatch({type: 'SET_FEELING', payload: this.state});  
  // }
  setUnderstanding = () => {
    this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state});
  }
  setSupport = () => {
    this.props.dispatch({type: 'SET_SUPPORT', payload: this.state});
  }
  setComments = () => {
    this.props.dispatch({type: 'SET_COMMENTS', payload: this.state});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        {JSON.stringify(this.props.reduxStore )}
        <form onSubmit={this.handleSubmit}>
          
          <label>
            How well are you understanding the content?
            <input type="text" onChange={this.handleChange} name="understand" />
            <button onClick={this.setUnderstanding}>Next</button>
          </label>
          <label>
            How well are you being supported?
            <input type="text" onChange={this.handleChange} name="support" />
            <button onClick={this.setSupport}>Next</button>
          </label>
          <label>
            Any comments you want to leave?
            <textarea type="text" onChange={this.handleChange} name="comments"></textarea>
            <button onClick={this.setComments}>Next</button>
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
  reduxStore
})
export default connect(mapStateToProps)(App);
