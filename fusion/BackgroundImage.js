import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';

const BackgroundImage = ({ src, size, position }) => styled('img')`
  background-image: url('${src}');
  background-size: ${size};
  background-position: ${position};
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
  src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
};

const BgImage = ({ children, ...props }) => (<BackgroundImage {...props}>{children}</BackgroundImage>);

export default BgImage;
