import * as usersActions from './users.actions';
import * as auth from './auth.actions';
import * as admins from './admins.actions';

export const { fetchUsers, fetchUsersSuccess } = usersActions;
export const { fetchCurrentUser } = auth;
export const { fetchAdmins } = admins;
