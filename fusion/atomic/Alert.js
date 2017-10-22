import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const alertStyle = css`
background:#ccc;
box-shadow:0 0 3px #aaa;
padding:5px;`;

const Alert = ({ children }) => (<div className={alertStyle}> {children} </div>);

/* Props Check */
Alert.propTypes = {
  /**
   * Type of Alert
   */
  type: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
};

/* Deafult Props */
Alert.defaultProps = {
  type: 'success',
};

export default withTheme(Alert);
