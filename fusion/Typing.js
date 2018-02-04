import React from 'react';
import styled from 'react-emotion';
import { keyframes } from 'emotion';
import PropTypes from 'prop-types';
import { withTheme } from 'theming';

const type = keyframes` 
  from { width: 0; } 
`;
const TypingDiv = styled('p')`
  font-family: "Courier";
  color:${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: bold;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: ${type} 4s 1s ease infinite; 
`;

const Typing = ({ text, color, fontSize }) => (
  <TypingDiv color={color} fontSize={fontSize}>{text}</TypingDiv>);

/* Props Check */
Typing.propTypes = {
  /**
   * Typing text
   */
  text: PropTypes.string,
  /**
   *text color
   */
  color: PropTypes.string,
  /**
   *text font-size
   */
  fontSize: PropTypes.number,
};

/* Deafult Props */
Typing.defaultProps = {
  text: 'Typing text content',
  color: '#432234',
  fontSize: 16,
};

export default withTheme(Typing);
