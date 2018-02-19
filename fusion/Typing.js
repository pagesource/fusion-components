import React from 'react';
import { keyframes } from 'emotion';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { withTheme } from 'theming';

const type = keyframes` 
  from { width: 0; } 
`;
const TypingDiv = styled('p')`
  font-family: 'Courier';
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: ${type} 4s 1s ease infinite;
`;

const Typing = ({ text }) => <TypingDiv>{text}</TypingDiv>;

/* Props Check */
Typing.propTypes = {
  /**
   * Typing text
   */
  text: PropTypes.string,
};

/* Deafult Props */
Typing.defaultProps = {
  text: 'Typing text content',
};

export default withTheme(Typing);
