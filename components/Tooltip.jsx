import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tooltip = styled.div.attrs({
  onHover: () => {
    return 'block';
  }
})`
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}px;
  :hover::before {
    display: ${props => props.onHover};
  }
  :hover::after {
    display: ${props => props.onHover};
  }
  ::before {
    display: none;
    content: "Hello";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, -4px);
    white-space: nowrap;
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
  }
  ::after {
    display: none;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 8px);
    content: " ";
    border-width: 6px;
    border-style: solid;
    border-color: rgb(0, 0, 0) transparent transparent;
  }
`;

/* Props Check */
Tooltip.propTypes = {
  /**
   * Alignment
  */
  align: PropTypes.string,
  /**
   * Font Weight
  */
  weight: PropTypes.string,
  /**
   * Font Size
  */
  size: PropTypes.number,
  /**
   * Font Size
  */
  onHover: PropTypes.func
};

/* Deafult Props */
Tooltip.defaultProps = {
  align: "left",
  weight: "bold",
  size: 18
};

export default Tooltip;
