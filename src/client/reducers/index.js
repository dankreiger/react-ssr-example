import { combineReducers } from 'redux';
import usersReducer from './users.reducer';
import authReducer from './auth.reducer';
import adminsReducer from './admins.reducer';

export default combineReducers({
  admins: adminsReducer,
  auth: authReducer,
  users: usersReducer,
});
