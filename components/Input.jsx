import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

const Input = (props) => {
  const {name, placeholder, onchange, disabled} = props;
  return(
    <div className="Input-Fusion">
      <input type="text" name={name} placeholder={placeholder} onChange={onchange} disabled={disabled}/>
    </div>
  );
}

Input.propTypes = {
  /**
   * href
  */
  name: PropTypes.string,
  /**
   * title
  */
  placeholder: PropTypes.string,
  /**
   * onChange event Handler
  */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: 'Name',
  placeholder: 'Placeholder Text'
};

export default Input;
