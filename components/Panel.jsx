import PropTypes from 'prop-types';
import styled from 'styled-components';

const Panel = styled.div`
  overflow: hidden;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  color: ${props => props.color};
`;

/* Props Check */
Panel.propTypes = {
  /**
   * Text Align
  */
  color: PropTypes.string
};

/* Deafult Props */
Panel.defaultProps = {
  color: "#000"
};

export default Panel;
