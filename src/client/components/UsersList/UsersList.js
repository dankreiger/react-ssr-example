import React, { useEffect } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const UsersList = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const renderUsers = () => {
    return users.map(user => <li key={user.id}>{user.name}</li>);
  };

  return (
    <div>
      Here is a list of puppy users:
      <ul>{renderUsers()}</ul>
    </div>
  );
};

UsersList.propTypes = {
  fetchUsers: func.isRequired,
  users: arrayOf(
    shape({
      id: number,
      name: string,
    }),
  ),
};

UsersList.defaultProps = {
  users: [],
};

const mapStateToProps = state => ({
  users: state.users,
});

function loadData(store) {
  return store.dispatch(actions.fetchUsers());
}

export { loadData };
export default connect(
  mapStateToProps,
  actions,
)(UsersList);
