import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {css} from 'emotion';
import styled from 'emotion/react';
import theme from './themes';

const TooltipBtn = css`
    height: 40px;
    width: 310px;
    background: {this.props.theme.buttonColor};
    border-radius: 3px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    &:hover{
      opacity: 0.6;
    }

`
const HiddenDiv = styled.span`
    background: aliceblue;
    position: relative;
    left: 60%;
    color: blue;
    bottom: 51px;
    width: 132px;
    border-radius: 3px;
    height: 19px;
`

class Tooltip extends React.Component {
    constructor() {
    super();
      this.state = {
       open: false,
      };
    }

  render() {
  
    return (
        <div className={TooltipBtn} onMouseEnter={() => this.onMouseEnter()} onMouseOut ={() => this.onMouseOut ()}>Hover over me!
      {
          this.state.open
            ? 
            <HiddenDiv>
              <p>{this.props.text}</p>
            </HiddenDiv>
            : null
        }
      </div>
    );
  }
  onMouseEnter() {
    this.setState({open: true});
  }
  onMouseOut() {
    this.setState({open: false});
  }
}

/* Props Check */
Tooltip.propTypes = {
    /**
    *Tooltip list items
    */
    text: PropTypes.string,
};

/* Deafult Props */
Tooltip.defaultProps = {
  text: "Some hidden text."
};

export default Tooltip;