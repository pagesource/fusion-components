import React, { PropTypes } from 'react';

import './Avatar.css';

const Avatar = ({ ...props }) => {
  return (
    <img
      className="avatar"
      src={props.picUrl}
      alt={props.altTag}
      width={props.width}
      height={props.height}
    />
  );
};

Avatar.propTypes = {
  /**
   * Picture URL
  */
  picUrl: PropTypes.string,
  /**
   * Alt Tag
  */
  altTag: PropTypes.string,
  /**
   * Image Size
  */
  size: PropTypes.number
};

export default Avatar;