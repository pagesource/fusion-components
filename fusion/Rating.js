/* //------- To Do ------------
- change the star color to yellow
- set a local state and clicking on a star updates the state and the star color.
//--------------------------- 
 */

import PropTypes from 'prop-types';
import React from 'react';
// import skeleton from './skeleton'
// import './Rating.css';

/**
 * Star rating Molecule with click-able buttons
 */

const Rating = ({ value, onClick, primaryStarColor, secondaryStarColor }) => {
  // const stars = Array.from({ length: 5 }, (a, b) => b);
  const rating = (value / 5) * 100;
  const sx = {
    root: {
      display: 'inline-flex',
      fontSize: '14px',
    },
    star: {
      position: 'relative',
      fontSize: 'inherit',
      textDecoration: 'none',
      lineHeight: 1,
      margin: 0,
      marginRight: '.25em',
      padding: '.25em 0',
      border: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      cursor: onClick ? 'pointer' : null,
    },
  };

  const gray = '#6a6a6a';
  const active = '#f4ce42';
  const getEmptyStyle = (i) => {
    const active = i < value;
    const color = active ? null : gray;
    return { color };
  };

  const getActiveStyle = (i) => {
    const active = i < value;
    const display = active ? null : 'none';
    const clip = value > i && value < i + 1 ? 'rect(0, .5em, 1em, 0)' : null;

    return {
      position: 'absolute',
      top: '.25em',
      left: 0,
      display,
      clip,
    };
  };

  const handleClick = i => () => {
    if (onClick) {
      onClick(i + 1);
    }
  };

  return (
    <div role="link" tabIndex="0" className="rating" style={sx.root} onClick={handleClick()} >
      <div style={sx.primaryStar} >★★★★★</div>
      <div style={sx.secondaryStar} >☆☆☆☆☆</div>
    </div>
  );
};

Rating.defaultProps = {
  primaryStarColor: '#f4ce42',
  secondaryStarColor: '#6a6a6a',
};

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: PropTypes.number.isRequired,
  /** Click handler - returns index of star clicked */
  onClick: PropTypes.func,
  /** Main Star Color */
  primaryStarColor: PropTypes.string,
  /** Secondary Star Color */
  secondaryStarColor: PropTypes.string,
};

export default Rating;
