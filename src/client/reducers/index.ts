import { combineReducers } from 'redux';
import usersReducer from './users.reducer';
import { UsersReducerState } from './users.reducer.types';

export default combineReducers({
    users: usersReducer,
});
