import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <div>
                    <a href="#" onClick={(e) => this.props.actions.loadFakeData()}>Load fake data</a>
                    <br />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);