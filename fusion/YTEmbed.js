import PropTypes from 'prop-types';
import React from 'react';

const YTEmbed = ({
  id = 'PCMXQonN0gM', width, height, title,
}) => (
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
  title: 'you tube vids',
  width: 560,
  height: 315,
};

export default YTEmbed;
