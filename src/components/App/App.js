import React, { Component } from 'react';
// Styling imports
import './App.css';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
// import Progress from '../Progress/Progress';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="review-container">
          <Card>
            <header className="review-header">
              <Typography variant="h4">Review</Typography>
            </header>
            <Review />
          </Card>
          </div>
        <div className="App">
          <Card>
          <Header />
          {/* <Progress /> */}
          <CardContent>
          <div className="feedback-form">
            <Route exact path="/" component={Feeling} />
            <Route path="/2" component={Understanding}></Route> 
            <Route path="/3" component={Support}></Route>
            <Route path="/4" component={Comments}></Route>
            <Route path="/5" component={Submit}></Route>
          </div>
          </CardContent>
          </Card>
        </div>
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
