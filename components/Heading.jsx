import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const el = React.createElement

const HeadingSC = styled(
  ({ tag, children, ...props }) => el(tag, props, children)
)`
  color: black;
`;

HeadingSC.propTypes = {
  /**
   * href
  */
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  /**
   * title
  */
  title: PropTypes.string,
};

HeadingSC.defaultProps = {
  tag: 'h2',
};

export default HeadingSC;
