export default function users(state = {}, action) {
  switch (action.type) {
    case "LOAD_USERS_SUCCESS":
      return Object.assign({}, state, {
        list: state.list ? state.list.concat(action.users) : action.users
      });

    case "ADD_USER":
      console.log("STATE", state);
      return Object.assign({}, state, {
        list: [...(state.list || []), action.user]
      });

    case "LOGIN_SUCCESS":
      return Object.assign({}, state, { loggedIn: action.loggedIn });
    default:
      return state;
  }
}
