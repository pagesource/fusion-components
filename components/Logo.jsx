import React, { PropTypes } from 'react';
import config from '../data/config.json';

import './Logo.css';

const Logo = (props) => {
  const { src, alt, url, imgWidth } = props;

  return (
    <a href={url}>
      <img
        src={src}
        alt={alt}
        width={imgWidth}
        className="brand-logo"
      />
    </a>
  );
};

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
  * Logo URL
  */
  url: PropTypes.string,
  /**
  * Image width
  */
  imgWidth: PropTypes.number
};

Logo.defaultProps = {
  src: config.defaultLogo,
  alt: config.brandName,
  url: '/',
  imgWidth: 100
};

export default Logo;
