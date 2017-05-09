/* eslint-disable no-unused-vars */

import fetch from "isomorphic-fetch";

//List acitons
const requestFakeData = () => ({ type: "LOAD_FAKE_DATA_REQUEST" });
const loadFakeDataSuccess = users => ({ type: "LOAD_USERS_SUCCESS", users });

//Login actions
const loginSuccess = loggedIn => ({ type: "LOGIN_SUCCESS", loggedIn });
const loginFailure = error => ({ type: "LOGIN_FAILURE" });

//User actions
export const addUser = user => ({ type: "ADD_USER", user });

//Task list actions
export const loadTasks = tasks => ({ type: "LOAD_TASKS", tasks });

//Creators
export const doLogin = (email, password) => {
  return dispatch => dispatch(loginSuccess(true));
};

export const loadFakeData = () => {
  return function(dispatch) {
    dispatch(requestFakeData());
    fetch("https://jsonplaceholder.typicode.com/users").then(res => {
      return res.json().then(d => {
        dispatch(loadFakeDataSuccess(d));
      });
    });
  };
};
