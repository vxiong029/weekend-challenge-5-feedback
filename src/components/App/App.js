import React, { Component } from 'react';
import './App.css';
// Redux imports
import {connect} from 'react-redux';
// Router imports
import {HashRouter as Router, Route, Link} from 'react-router-dom';
// Components imports
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {
  // all input handleChange - when an input field has data send it to rating
  // handleChange = (event) => {
  //   this.setState({
  //     rating: event.target.value
  //   })
  // }
  // form handleClick - send all the feedback input fields to redux in a package
  // handleClick = () => {
  //   console.log('in handle submit');
  //   this.props.dispatch({type: 'SENT_FEEDBACK'});
  // }
  // next button handleClick
  // setFeedback = (setProperty) => {
  //   this.props.dispatch({
  //     type: 'SET_FEEDBACK',
  //     payload: {
  //       ...this.state,
  //       propertyName: setProperty
  //     } 
  //   })
  // }
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        {JSON.stringify(this.props.reduxStore )}
        <Feeling />
        <Understanding />
        <Support />
        <Comments />
      </div>
    </Router>
    );
  }
}
// allows us to access REDUX information as props
const mapStateToProps = reduxStore => ({
  reduxStore
})
export default connect(mapStateToProps)(App);
