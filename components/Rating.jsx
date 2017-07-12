import React from 'react';
import PropTypes from 'prop-types';
// import skeleton from './skeleton'
import './Rating.css';

/**
 * Star rating Molecule with clickable buttons
 */

const Rating = ({ value, onClick }) => {
  const stars = Array.from({ length: 5 }, (a, b) => b);

  const sx = {
    root: {
      display: 'inline-flex',
      fontSize: '14px'
    },
    star: {
      position: 'relative',
      fontSize: 'inherit',
      lineHeight: 1,
      margin: 0,
      marginRight: '.25em',
      padding: '.25em 0',
      border: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      cursor: onClick ? 'pointer' : null
    }
  };

  const gray = '#9a9a9a';
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
      clip
    };
  };

  const handleClick = (i) => {
    return () => {
      if (onClick) {
        onClick(i + 1);
      }
    };
  };

  return (
    <a
      className="rating"
      href=""
      onClick={handleClick()}
    >
      {stars.map((s) => (
        <span
          key={s}
          style={sx.star}
        >
          <span style={getEmptyStyle(s)}>☆ </span>
          <span style={getActiveStyle(s)}>★</span>
        </span>
      ))}
    </a>
  );
};

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: PropTypes.number,
  /** Click handler - returns index of star clicked */
  onClick: PropTypes.func
};

export default Rating;
