import PropTypes from 'prop-types';
import styled from 'styled-components';

const Slider = styled.input.attrs({
  type: "range",
  name: props => props.name,
  min: props => props.min,
  max: props => props.max,
  defaultValue: props => props.defaultValue,
  disabled: props => props.disabled,
  onChange: props => props.onChange,
})`
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
  disabled: PropTypes.bool
}

/* Deafult Props */
Slider.defaultProps = {
  name: "slider",
  min: 1,
  max: 10,
  defaultValue: 1,
  disabled: false
};

export default Slider;
