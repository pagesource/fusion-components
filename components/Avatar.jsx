import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.img.attrs({
  // Defining Static Props
	src: props => props.picUrl || 'https://images.unsplash.com/photo-1422065649003-cf6684a31468',
	alt: props => props.alt || 'JESUS Saves',

})`
  width: ${props => props.width}%;
  height: ${props => props.height}px;
`;

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
   * Image Width
  */
  width: PropTypes.number,
  /**
   * Image Height
  */
  height: PropTypes.number
};

export default Avatar;
