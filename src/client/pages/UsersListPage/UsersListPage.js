import React, { useEffect } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../actions';

const UsersListPage = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const renderUsers = () => {
    return users.map(user => <li key={user.id}>{user.name}</li>);
  };
  const head = () => {
    return (
      <Helmet>
        <title>{`${users.length} Users loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  };

  return (
    <div>
      {head()}
      Here is a list of puppy users:
      <ul>{renderUsers()}</ul>
    </div>
  );
};

UsersListPage.propTypes = {
  fetchUsers: func.isRequired,
  users: arrayOf(
    shape({
      id: number,
      name: string,
    }),
  ),
};

UsersListPage.defaultProps = {
  users: [],
};

const mapStateToProps = state => ({
  users: state.users,
});

function loadData(store) {
  return store.dispatch(actions.fetchUsers());
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    actions,
  )(UsersListPage),
};
