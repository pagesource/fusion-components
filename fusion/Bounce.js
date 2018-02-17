import { keyframes } from 'emotion';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -50px, 0);
  }

  70% {
    transform: translate3d(0, -20px, 0);
  }

  90% {
    transform: translate3d(0,-5px,0);
  }
`;

const BounceIt = styled('div')`
  width: 96px;
  position: relative;
  color: #;
  top: 29px;
  font-weight: bold;
  text-transform: uppercase;
  height: 96px;
  border-radius: 50%;
  animation: ${bounce} 1s ease infinite;
  transform-origin: center bottom;
`;

const Bounce = ({ fontSize, text, src, width, color, alt }) => (
  <BounceIt>
    <span style={{ color: `${color}`, fontSize: `${fontSize}px` }}>{text}</span>
    <img src={src} width={width} alt={alt} />
  </BounceIt>
);

/* Props Check */
Bounce.propTypes = {
  /**
   * Image src link
   */
  src: PropTypes.string,
  /**
   * Image width
   */
  width: PropTypes.number,
  /**
   * Bounce text
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

  alt: PropTypes.string,
};

/* Deafult Props */
Bounce.defaultProps = {
  src:
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Basketball_ball.svg',
  width: 40,
  text: 'Boucing text',
  color: '#ASD',
  fontSize: 20,
  alt: 'Bouncing Image',
};

export default withTheme(Bounce);
