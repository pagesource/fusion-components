import { css } from 'emotion';
import React, { PureComponent } from 'react';

const toggle = css`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  > input {
    display: none;
  }
`;

const slider = css`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const checked = css`
  background-color: #3a1f4f;
  box-shadow: 0 0 1px #3a1f4f;

  &:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

class ToggleButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // checked: false,
      checkedClass: '',
    };
    this.change.bind(this);
  }

  change(e) {
    if (e.target.checked) {
      this.setState({
        // checked: true,
        checkedClass: checked,
      });
    } else {
      this.setState({
        // checked: false,
        checkedClass: '',
      });
    }
  }

  render() {
    return (
      <label htmlFor="formINput" className={toggle}>
        <input
          id="formInput"
          className={this.state.checkedClass}
          type="checkbox"
          onChange={this.change}
        />
        <span className={`${slider} ${this.state.checkedClass}`} />
      </label>
    );
  }
}

export default ToggleButton;
