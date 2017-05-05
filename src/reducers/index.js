import { combineReducers } from 'redux'
import users from './userReducer'
import tasks from './task-list-reducer';

const rootReducer = combineReducers({
  users,
  tasks
})

export default rootReducer