import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const LogoStyle = css`
  padding: 15px;
  cursor: pointer;
`;

const Logo = ({ src, alt, imgWidth }) => (
  <img className={LogoStyle} src={src} alt={alt} width={imgWidth} />
);

Logo.propTypes = {
  /**
   * Brand Logo
   */
  src: PropTypes.string,
  /**
   * Logo Alternative Text
   */
  alt: PropTypes.string,
  /**
   * Image width
   */
  imgWidth: PropTypes.number,
};

Logo.defaultProps = {
  src: 'https://facebook.github.io/react/img/logo.svg',
  alt: 'Fusion',
  imgWidth: 100,
};

export default withTheme(Logo);
