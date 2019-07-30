import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h2>Not Found</h2>;
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.shape({
    notFound: PropTypes.bool,
  }),
};

NotFoundPage.defaultProps = {
  staticContext: {},
};

export default {
  component: NotFoundPage,
};
