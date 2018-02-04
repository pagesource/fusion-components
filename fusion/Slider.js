import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const SliderInput = ({
  name, min, max, defaultValue, disabled, onChange,
}) => (
  <input
    type="range"
    name={name}
    min={min}
    max={max}
    defaultValue={defaultValue}
    disabled={disabled}
    onChange={onChange}
  />);

const Slider = styled(SliderInput)`
  -webkit-appearance: none;
  background-color: #cccccc;;
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

SliderInput.propTypes = {
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
SliderInput.defaultProps = {
  name: 'slider',
  min: 1,
  max: 10,
  defaultValue: 1,
  disabled: false,
};

export default Slider;
