import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Slider = ({ name, min, max, defaultValue, onChange, disabled }) => (
  <input
    type="range"
    name={name}
    min={min}
    max={max}
    defaultValue={defaultValue}
    onChange={onChange}
    disabled={disabled}
  />
);

const SliderStyled = styled(Slider)`
  -webkit-appearance: none;
  background-color: #cccccc;
  height: 5px;
  border-radius: 5px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    width: 1rem;
    height: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

/* Props Check */
Slider.propTypes = {
  /**
   * name
   */
  name: PropTypes.string,
  /**
   * min value
   */
  min: PropTypes.number,
  /**
   * max value
   */
  max: PropTypes.number,
  /**
   * defaultValue
   */
  defaultValue: PropTypes.number,
  /**
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
};

/* Default Props */
Slider.defaultProps = {
  name: 'slider',
  min: 1,
  max: 10,
  defaultValue: 1,
  disabled: false,
  onChange: null,
};

export default SliderStyled;
