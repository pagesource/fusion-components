import PropTypes from 'prop-types';
import React from 'react';

const YTEmbed = ({ id, width, height, title = '' }) => (
  <iframe
    title={title}
    width={width}
    height={height}
    src={`https://www.youtube.com/embed/${id}`}
    frameBorder="0"
    gesture="media"
    allowFullScreen
  />
);

YTEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
};

YTEmbed.defaultProps = {
  // id: 'PCMXQonN0gM',
  width: 560,
  height: 315,
  title: 'I frame title',
};

export default YTEmbed;
