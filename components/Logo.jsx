import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoSC = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  width: ${props => props.width};
  padding: 15px;
  cursor: pointer;
`;

LogoSC.propTypes = {
  /**
  * Brand LogoSC
  */
  src: PropTypes.string,
  /**
  * LogoSC Alternative Text
  */
  alt: PropTypes.string,
  /**
  * Image width
  */
  imgWidth: PropTypes.number
};

LogoSC.defaultProps = {
  src: "https://facebook.github.io/react/img/logo.svg",
  alt: "Fusion",
  imgWidth: 100
};

export default LogoSC;
