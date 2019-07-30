import { FETCH_CURRENT_USER } from '../constants';

/* eslint-disable import/prefer-default-export */
export const fetchCurrentUser = () => async (
  dispatch,
  getState,
  api,
) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
/* eslint-enable */
