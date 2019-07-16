import { Reducer } from 'redux';
import { UsersReducerState } from './users.reducer.types';
import { UsersActions } from '../../enums/users.enums';

const usersReducer: Reducer<UsersReducerState | []> = (state = [], action) => {
    switch (action.type) {
        case UsersActions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

export default usersReducer;
