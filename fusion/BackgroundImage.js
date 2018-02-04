import styled from "emotion/react";
import PropTypes from "prop-types";
import React from "react";

const BackgroundImage = styled("div")`
  background-image: url('${props => props.src}');
  background-size: ${props => props.size};
  background-position: ${props => props.position};
  height: auto;
  min-height:${props => props.minHeight}
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
  minHeight: PropTypes.number,
  /**
   * Image position
   */
  position: PropTypes.string
};

/* Deafult Props */
BackgroundImage.defaultProps = {
  src:
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20",
  minHeight: 400
};
MyBackground.propTypes = {
  children: PropTypes.element
};
MyBackground.defaultProps = {
  children: ""
};
export default function MyBackground({ children, ...props }) {
  return <BackgroundImage {...props}>{children}</BackgroundImage>;
}
