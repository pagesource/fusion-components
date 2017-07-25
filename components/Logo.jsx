import PropTypes from 'prop-types';
import styled from 'styled-components';

const Logo = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  width: ${props => props.width};
  padding: 15px;
  cursor: pointer;
`;

Logo.propTypes = {
  /**
  * Brand Logo
  */
  src: PropTypes.string,
  /**
  * Logo Alternative Text
  */
  alt: PropTypes.string,
  /**
  * Image width
  */
  imgWidth: PropTypes.number
};

Logo.defaultProps = {
  src: "https://facebook.github.io/react/img/logo.svg",
  alt: "Fusion",
  imgWidth: 100
};

export default Logo;
