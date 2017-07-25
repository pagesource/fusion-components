import PropTypes from 'prop-types';
import styled from 'styled-components';

const PanelHeader = styled.header`
  font-size: 16px;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  padding: 8px;
  font-weight: 700;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

/* Props Check */
PanelHeader.propTypes = {
  /**
   * Text Color
  */
  color: PropTypes.string,
  /**
   * Background Color
  */
  bg: PropTypes.string
};

/* Deafult Props */
PanelHeader.defaultProps = {
  color: "green"
};


export default PanelHeader;
