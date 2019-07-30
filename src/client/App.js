import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import * as actions from './actions';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const RouteType = PropTypes.shape({
  component: PropTypes.func,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
      ]),
      path: PropTypes.string,
      loadData: PropTypes.func,
      exact: PropTypes.bool,
    }),
  ),
});

App.propTypes = {
  route: RouteType,
};

App.defaultProps = {
  route: {},
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(actions.fetchCurrentUser()),
};
