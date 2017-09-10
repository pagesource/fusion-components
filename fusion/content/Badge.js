import { styled } from 'emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

const Badge = styled.div`
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  margin-left: 4px;
  margin-right: 4px;
  padding: 4px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
  border-radius: 4px;
`;

/* Props Check */
Badge.propTypes = {
  /**
   * Text Color
   */
  color: PropTypes.string,
  /**
   * Background Color
   */
  bg: PropTypes.string,
};

/* Deafult Props */
Badge.defaultProps = {
  color: '#fff',
  bg: '#000',
};

export default Badge;
