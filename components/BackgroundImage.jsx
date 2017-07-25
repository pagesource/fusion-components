import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundImage = styled.div.attrs({
  // Defining Static Props
	src: props => props.picUrl || 'https://images.unsplash.com/photo-1422065649003-cf6684a31468',

})`
  background-image: url('${props => props.src}');
  background-size: ${props => props.size};
  background-position: ${props => props.position};
  height: 0;
  padding-bottom: 50%;
`;

BackgroundImage.propTypes = {
  /**
   * Picture URL
  */
  picUrl: PropTypes.string,
  /**
   * Image Width
  */
  width: PropTypes.number
};

export default BackgroundImage;
