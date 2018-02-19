import { css } from 'emotion';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';

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

`;
const HiddenDiv = styled('span')`
  background: aliceblue;
  position: relative;
  left: 60%;
  color: blue;
  bottom: 51px;
  width: 132px;
  border-radius: 3px;
  height: 19px;
`;

class Tooltip extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  onMouseEnter() {
    this.setState({ open: true });
  }

  onMouseOut() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div
        className={TooltipBtn}
        onMouseEnter={() => this.onMouseEnter()}
        onMouseOut={() => this.onMouseOut()}
        onBlur={() => this.onMouseOut()}
      >
        Hoverover me!
        {this.state.open ? (
          <HiddenDiv>
            <p>{this.props.text}</p>
          </HiddenDiv>
        ) : null}
      </div>
    );
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
  text: 'Some hidden text.',
};

export default Tooltip;
