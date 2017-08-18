import PropTypes from 'prop-types';
import {css} from 'emotion';
import styled from 'emotion/react';
import { withTheme } from 'theming';

const display={
  invisible: "none",
  visible: "block"
}

const Wrapper= styled('div')`
  background: #ececec;
  color: #555;
  cursor: help;
  margin: 100px 75px 10px 75px;
  padding: 10px 15px;
  position: relative;
  text-align: center;
  width: 200px;
  -webkit-transform: translateZ(0); 
  -webkit-font-smoothing: antialiased;
   &:hover {
        &textShow{
          display: ${props => props.display.visible}
        }
   }

`
const ToolTip=styled('div')`
  background: #1496bb;
  bottom: 100%;
  color: #fff;
  display: block;
  left: -25px;
  margin-bottom: 15px;
  opacity: 0;
  padding: 20px;
  pointer-events: none;
  position: absolute;
  width: 100%;
    transform: translateY(10px);
    transition: all .25s ease-out;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);

  &::before {
  bottom: -20px;
  content: " ";
  display: block;
  height: 20px;
  left: 0;
  position: absolute;
  width: 100%;
  }    

  &::after {
  border-left: solid transparent 10px;
  border-right: solid transparent 10px;
  border-top: solid #1496bb 10px;
  bottom: -10px;
  content: " ";
  height: 0;
  left: 50%;
  margin-left: -13px;
  position: absolute;
  width: 0;
  }

`

const Tooltip = (props) => {
  return ( 
   <wrapper>
    I have a tooltip.
    <ToolTip className="textShow">{props.onHover}</ToolTip>
  </wrapper>
  );
};

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
  onHover: PropTypes.string
};

/* Deafult Props */
Tooltip.defaultProps = {
  align: "left",
  weight: "bold",
  size: 18,
  onHover: "Tooltip content"
};

export default withTheme(Tooltip);
