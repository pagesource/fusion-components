import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const Banner = ({ src, alt, picUrl }) => {
  const bannerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
    background-size: cover;
    background-position: center;
    background-image: url(${picUrl});
  `;

  return <img src={src} className={bannerStyle} alt={alt} />;
};

/* Props Check */
Banner.propTypes = {
  /**
   * Image URL
   */
  picUrl: PropTypes.string,

  /**
   * src
   */
  src: PropTypes.string,
  /**
   * alt text
   */
  alt: PropTypes.string,
};

/* Default Props */
Banner.defaultProps = {
  picUrl:
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
  src: 'http://via.placeholder.com/350x150',
  alt: 'Banner',
};

export default withTheme(Banner);
