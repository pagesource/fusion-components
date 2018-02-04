import { css, keyframes } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const rotation = keyframes`  
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }  
`;

const LoaderStyle = css`
  border: 7px solid #f3f3f3;
  border-top: 7px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${rotation} 1s ease infinite;
`;

const Loader = ({ value }) => (
  <div
    css={`
      composes: ${LoaderStyle};
    `}
    value={value}
  />
);

/* Props Check */
Loader.propTypes = {
  /**
   * Progress Length
   */
  value: PropTypes.number,
};

/* Deafult Props */
Loader.defaultProps = {
  value: 1 / 3,
};

export default withTheme(Loader);
