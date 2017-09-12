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

const Rating = ({ value, onClick }) => {
  const stars = Array.from({ length: 5 }, (a, b) => b);

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

  return (<a className="rating" href="" onClick={handleClick()}>
    {stars.map(s => (
      <span key={s} style={sx.star}>
        <span style={getEmptyStyle(s)}>☆ </span>
        <span style={getActiveStyle(s)}>★</span>
      </span>
    ))}
  </a>);
};

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: PropTypes.number,
  /** Click handler - returns index of star clicked */
  onClick: PropTypes.func,
};

export default Rating;
