import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
//import * as appActions from './actions';
import App from './App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk, logger)
));

//store.dispatch(appActions.loadFakeData())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
