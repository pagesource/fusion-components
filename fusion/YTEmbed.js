import PropTypes from 'prop-types';
import React from 'react';

const YTEmbed = ({ id, width, height }) => (
  <iframe
    width={width}
    height={height}
    src={`https://www.youtube.com/embed/${id}`}
    frameborder="0"
    gesture="media"
    allowfullscreen
  />
);

YTEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

YTEmbed.defaultProps = {
  id: 'PCMXQonN0gM',
  width: 560,
  height: 315,
};

export default YTEmbed;
