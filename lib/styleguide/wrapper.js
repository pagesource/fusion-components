import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'theming';

const theme = {
  color: 'black',
  background: 'white',
};

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
