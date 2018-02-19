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
  const rating = value / 5 * 100;
  const sx = {
    root: {
      display: 'inline-block',
      position: 'relative',
      fontSize: '20px',
    },
    primaryStar: {
      position: 'absolute',
      top: '0',
      left: '0',
      overflow: 'hidden',
      width: `${rating}%`,
      fontSize: 'inherit',
      color: primaryStarColor,
      backgroundColor: 'transparent',
      cursor: onClick ? 'pointer' : null,
    },
    secondaryStar: {
      color: secondaryStarColor,
    },
  };

  const handleClick = i => () => {
    if (onClick) {
      onClick(i + 1);
    }
  };

  return (
    <div
      role="link"
      tabIndex="0"
      className="rating"
      style={sx.root}
      onClick={handleClick()}
      onKeyPress={() => {}}
    >
      <div style={sx.primaryStar}>★★★★★</div>
      <div style={sx.secondaryStar}>☆☆☆☆☆</div>
    </div>
  );
};

Rating.defaultProps = {
  primaryStarColor: '#f4ce42',
  secondaryStarColor: '#6a6a6a',
  onClick: () => {},
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
