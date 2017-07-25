import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a.attrs({
  href: props => props.href
})`
  color: violet;
  text-decoration: none;
`;

/* Props Check */
Link.propTypes = {
  /**
   * Text Align
  */
  href: PropTypes.string
};

/* Deafult Props */
Link.defaultProps = {
  href: "http://google.com/"
};

export default Link;
