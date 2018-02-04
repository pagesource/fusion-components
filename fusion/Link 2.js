import PropTypes from 'prop-types';
import styled from 'emotion';

const Link = styled('a')({
  href: props => props.href,
})`
  color: violet;
  text-decoration: none;
`;

/* Props Check */
Link.propTypes = {
  /**
   * URL
   */
  href: PropTypes.string,
};

/* Deafult Props */
Link.defaultProps = {
  href: 'http://google.com/',
};

export default Link;
