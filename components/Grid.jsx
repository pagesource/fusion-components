import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children }) => {
  return (
    <div className="grid">
      {children}
    </div>
  );
};

Grid.propTypes = {
  /**
  * Grid
  **/
  children: PropTypes.node.isRequired
};

export default Grid;
