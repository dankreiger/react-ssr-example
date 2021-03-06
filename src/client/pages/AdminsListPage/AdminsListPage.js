import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import requireAuth from '../../hocs/requireAuth/requireAuth';

const AdminsListPage = ({ admins, fetchAdmins }) => {
  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  const renderAdmins = () =>
    admins.map((admin) => <li key={admin.id}>{admin.name}</li>);

  return (
    <div>
      <h3>Protected list of admins</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};

AdminsListPage.propTypes = {
  admins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  fetchAdmins: PropTypes.func.isRequired,
};

AdminsListPage.defaultProps = {
  admins: [],
};

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, {
    fetchAdmins: actions.fetchAdmins,
  })(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(actions.fetchAdmins()),
};
