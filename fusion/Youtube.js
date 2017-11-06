import PropTypes from 'prop-types';
import React from 'react';

const Youtube = ({id, width, height}) =>(
  <iframe width={width} height={height} src={`https://www.youtube.com/embed/${id}`} frameborder="0" gesture="media" allowfullscreen></iframe>
);

Youtube.propTypes = {
  id: PropTypes.string.isRequired,
  width:PropTypes.number,
  height:PropTypes.number
};

Youtube.defaultProps = {
    id: "PCMXQonN0gM",
    width: 560,
    height:315,
}

export default Youtube;
