import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  const RequireAuth = props => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>Loading...</div>;
      default:
        return <ChildComponent {...props} />;
    }
  };

  RequireAuth.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
      .isRequired,
  };

  function mapStateToProps({ auth }) {
    return { auth };
  }
  return connect(mapStateToProps)(RequireAuth);
};
