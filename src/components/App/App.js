import React, { Component } from 'react';
import './App.css';
// Redux imports
import {connect} from 'react-redux';
// Router imports
import {HashRouter as Router, Route} from 'react-router-dom';
// Components imports
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Submit from '../Submit/Submit';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Review />
        <Route exact path="/" component={Feeling} />
        <Route path="/2" component={Understanding}></Route> 
        <Route path="/3" component={Support}></Route>
        <Route path="/4" component={Comments}></Route>
        <Route path="/5" component={Submit}></Route>
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
