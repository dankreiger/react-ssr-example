import { FETCH_ADMINS } from '../constants';

/* eslint-disable import/prefer-default-export */
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res,
  });
};
/* eslint-enable import/prefer-default-export */
