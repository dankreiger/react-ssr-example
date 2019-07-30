import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo center" to="/">
          Puppy SSR
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            {' '}
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      googleId: PropTypes.string,
      __v: PropTypes.number,
      _id: PropTypes.string,
    }),
  ]).isRequired,
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  null,
)(Header);
