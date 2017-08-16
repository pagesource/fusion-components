import PropTypes from 'prop-types';
import {css} from 'emotion';

const LogoStyle = css`
  padding: 15px;
  cursor: pointer;
`;

const Logo = (props) => {
  return (
    <div>
       <img className={LogoStyle} src={props.src} alt={props.alt} width={props.imgWidth} />
    </div>
  );
};


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
