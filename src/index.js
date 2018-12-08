import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux imports 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Logger from 'redux-logger';
// REDUCERS
const feedback = (state = {}, action) => {
  switch (action.type) { 
    case 'SET_FEELING':
      return { ...state, feeling: action.payload.rating };
    case 'SET_UNDERSTANDING':
      return { ...state, understanding: action.payload.rating };
    case 'SET_SUPPORT':
      return {...state, support: action.payload.rating};
    case 'SET_COMMENTS':
      return {...state, comments: action.payload.rating};
    default:
      return state;
  }
}
// creates a REDUX STORE that holds the complete state "tree" of my APP
// there should only ever be ONE!!
const store = createStore(
  // reducers (a function that takes current "state" and the action to be processed
  // and returns the state as it should be based on action)
  combineReducers({
    feedback
  }),
  // enhancers (adds additional capabilities to store - logger allows us to see
  // more in console)
  applyMiddleware(Logger)
)
// Provider is the higher-order component that allows REDUX to bind with REACT
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
