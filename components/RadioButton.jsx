import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {
    return (
        <label>
            <input type="radio"
                defaultChecked={props.defaultChecked}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                disabled={props.disabled}
                />
            {props.children}
        </label>
    );
};

RadioButton.propTypes = {
  /**
   * Children
  */
  children: PropTypes.string,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * checked
   */
  defaultChecked: PropTypes.bool,
  /**
   * onChange Handler
   */
  onChange: PropTypes.func,
  /**
   * name
   */
  name : PropTypes.string,
  /**
   * value
   */
  value: PropTypes.string
};

RadioButton.defaultProps = {
  disabled: false,
}
export default RadioButton;