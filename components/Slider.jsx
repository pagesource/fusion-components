import React from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

const Slider = (props) => {
    return (
        <input className="primary-slider" type="range" 
            name={props.name} 
            min={props.minValue} 
            max={props.maxValue} 
            defaultValue={props.defaultValue} 
            onChange={props.onChange}
            disabled={props.disabled}
        />
    ); 
}

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

export default Slider;