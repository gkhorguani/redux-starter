import React from 'react';
import ReactDOM from 'react-dom';
import { Route, hashHistory } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
//import * as appActions from './actions';
import Home from './screens/Home';
import Users from './screens/Users';
import App from './App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk, logger)
));

//store.dispatch(appActions.loadFakeData())

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </App>
  </Router>
  </Provider>, document.getElementById('root')
);
