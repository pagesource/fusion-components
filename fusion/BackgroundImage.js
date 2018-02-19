import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';

const BackgroundImage = styled('img')`
  background-image: url('${props => props.src}');
  background-size: ${props => props.size};
  background-position: ${props => props.position};
  height: auto;
`;

/* Props Check */
BackgroundImage.propTypes = {
  /**
   * Picture URL
   */
  src: PropTypes.string,
  /**
   * Image Width
   */
  width: PropTypes.number,
  /**
   * Image Size
   */
  size: PropTypes.number,
  /**
   * Image position
   */
  position: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

/* Deafult Props */
BackgroundImage.defaultProps = {
  src:
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
  children: null,
};

const BgImage = ({ children, ...props }) => (
  <BackgroundImage {...props}>{children}</BackgroundImage>
);

BgImage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
BgImage.defaultProps = {
  children: null,
};
export default BgImage;
