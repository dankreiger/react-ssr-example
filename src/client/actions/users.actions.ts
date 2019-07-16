import axios, { AxiosResponse } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator, Store } from 'redux';

import { UsersReducerState } from '../reducers/users.reducer.types';
import { UsersActions } from '../../enums/users.enums';

export const fetchUsers: ActionCreator<ThunkAction<void, UsersReducerState, void, Action>> = () => async (
    dispatch: ThunkDispatch<Store, void, { type: string; payload: AxiosResponse }>,
) => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

    dispatch({
        type: UsersActions.FETCH_USERS,
        payload: res,
    });
};

export const fetchUsersSuccess = () => async dispatch => {
    const res = await axios.get('');
    dispatch({
        type: UsersActions.FETCH_USERS_SUCCESS,
        payload: res,
    });
};
