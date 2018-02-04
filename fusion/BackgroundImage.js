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
};

/* Deafult Props */
BackgroundImage.defaultProps = {
  src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
};

export default function Img({ children, ...props }) {
  return <BackgroundImage {...props}>{children}</BackgroundImage>;
}
