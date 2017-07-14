import React from 'react';
import PropTypes from 'prop-types';

import './Switch.css';

const Switch = (props) => {
    return (
        <label className="switch">
        <input type="checkbox" onChange={props.onChange} defaultChecked={props.defaultChecked} disabled={props.disabled}/>
        <span className="slider"></span>
        </label>

    );
}

Switch.propTypes = {
    /**
     * checked
     */
    defaultChecked: PropTypes.bool,
    /**
     * onChange handler
     */
    onChange: PropTypes.func,
    /**
     * disabled
     */
    disabled: PropTypes.bool,
}

export default Switch;