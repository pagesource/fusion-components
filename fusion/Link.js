import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const LinkStyle = css`
  color: violet;
  width: '90px';
  background: black;
  text-decoration: none;
`;

const customLink = ({ href, alt }) => (
  <a className={LinkStyle} href={href} alt={alt}>
    {href}
  </a>
);

/* Props Check */
customLink.propTypes = {
  /**
   * URL
   */
  href: PropTypes.string,

  /**
   *Link alt
   */
  alt: PropTypes.string,
};
/* Deafult Props */
customLink.defaultProps = {
  href: 'http://google.com/',
  alt: 'google',
};

export default withTheme(customLink);
