import styled from 'react-emotion';
import PropTypes from 'prop-types';

const BlockQuote = styled('blockquote')`
  color: indigo;
  font-size: 20px;
  text-align: ${props => props.align};
`;

/* Props Check */
BlockQuote.propTypes = {
  /**
   * Text Align
   */
  align: PropTypes.string,
};

/* Deafult Props */
BlockQuote.defaultProps = {
  aling: 'left',
};

export default BlockQuote;
