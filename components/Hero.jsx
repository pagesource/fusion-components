import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Hero.css';

const Hero = (props) => {
  const { backgroundImg, alt, imgWidth, link, theme, heading, subHeading, headingPosition } = props;

  const slide = () => {
    return (
      <div className={classnames('slide', `acss-theme-${theme}`, `align-${headingPosition}`)}>
        <img
          src={backgroundImg}
          alt={alt}
          width={`${imgWidth}%`}
          className="hero-image"
        />
        <div className={classnames('heading', `align-${headingPosition}`)}>
          {heading && (
            <h1>{heading}</h1>
          )}
          {subHeading && (
            <h2>{subHeading}</h2>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="hero">
      {(link !== undefined) ? (
        <a href={link}>
          {slide()}
        </a>
      ) : (
        slide()
      )}
    </div>
  );
};

Hero.propTypes = {
  /**
  * Background Image
  */
  backgroundImg: PropTypes.string,
  /**
  * Image Alt Text
  */
  alt: PropTypes.string,
  /**
  * Background Image Width
  */
  imgWidth: PropTypes.number,
  /**
  * Slide Link
  */
  link: PropTypes.string,
  /**
  * Theme
  */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
  * Heading
  */
  heading: PropTypes.string,
  /**
  * Sub Heading
  */
  subHeading: PropTypes.string,
  /**
  * Heading Alignment
  */
  headingPosition: PropTypes.oneOf(['left', 'center', 'right'])
};

Hero.defaultProps = {
  theme: 'light',
  headingPosition: 'left',
  imgWidth: 100
};

export default Hero;
