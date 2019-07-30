import { FETCH_USERS_SUCCESS, FETCH_USERS } from '../constants';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchUsersSuccess = () => async (
  dispatch,
  getState,
  api,
) => {
  const res = await api.get('');
  dispatch({
    type: FETCH_USERS_SUCCESS,
    payload: res,
  });
};
