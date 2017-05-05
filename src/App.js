import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React { this.props.list[0] && this.props.list[0].name }</h2>
        </div>
        <p className="App-intro" onClick={(e) => this.props.actions.loadFakeData()}>
          To get started, edit <code>src/App.js</code> and save to reload. {this.props.title && this.props.title}
        </p>
        <div>
          <a href="#" onClick={(e) => this.props.actions.doLogin()}>Login {this.props.loggedIn ? 'Yes' : 'NO'}</a>

          <br />
          <a href="#" onClick={(e) => this.props.actions.addUser({ name: 'Svani', id: 100 })}>
            Add User
          </a>

          <br />
          <a href="#" onClick={(e) => this.props.actions.loadTasks([{ name: 'Task1' }])}>
            Load Tasks
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    title: 'Gio',
    list: state.users.list || [],
    loggedIn: state.users.loggedIn,

    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);