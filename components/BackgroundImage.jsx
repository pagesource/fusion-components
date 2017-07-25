import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundImage = styled.div.attrs({
  // Defining Static Props
	src: props => props.picUrl ,

})`
  background-image: url('${props => props.src}');
  background-size: ${props => props.size};
  background-position: ${props => props.position};
  height: 0;
  padding-bottom: 50%;
`;

/* Props Check */
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

/* Deafult Props */
BackgroundImage.defaultProps = {
  picUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
};

export default BackgroundImage;
