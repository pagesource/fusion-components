import PropTypes from 'prop-types';
import {css} from 'emotion';
import Link from 'next/link'

const LinkStyle = css`
  color: violet;
  width: '90px';
  background: black;	
  text-decoration: none;
`;

const customLink = (props) => {
  return (
  	<div>
		<Link className={LinkStyle}  href= {props.href} alt={props.alt}>{props.href}</Link>
		</div>
  );
};


/* Props Check */
customLink.propTypes = {
  /**
   * URL 
  */
  href: PropTypes.string,

 /**
 *Link alt
 */
  alt: PropTypes.string
  };
/* Deafult Props */
customLink.defaultProps = {
  href: "http://google.com/",
  alt: "google"
};

export default customLink;
