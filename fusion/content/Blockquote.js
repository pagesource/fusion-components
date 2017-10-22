import styled from 'emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

const BlockQuote = styled.blockquote`
  color: indigo;
  font-size: 20px;
  text-align: ${({ align }) => align}
`;

/* Props Check */
BlockQuote.propTypes = {
  /**
   * Text Align
   */
  align: PropTypes.string,
};

/* Default Props */
BlockQuote.defaultProps = {
  align: 'left',
};

export default BlockQuote;
