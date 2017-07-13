import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = (props) => {
  return (

    <button
      type="button"
      onClick={props.onClick}
      className="primary"
      disabled={props.disabled}
    >
      {props.children}
    </button>

  );
};

Button.propTypes = {
  /**
   * onClick Function
  */
  onClick: PropTypes.func,
  /**
   * Children
  */
  children: PropTypes.string,
  /**
   * disabled
   */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
}
export default Button;
