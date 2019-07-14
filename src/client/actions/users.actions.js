import axios from 'axios';
import { FETCH_USERS_SUCCESS, FETCH_USERS } from '../constants';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get(
    'http://react-ssr-api.herokuapp.com/users',
  );

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchUsersSuccess = () => async dispatch => {
  const res = await axios.get('');
  dispatch({
    type: FETCH_USERS_SUCCESS,
    payload: res,
  });
};
