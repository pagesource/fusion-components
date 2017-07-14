import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const getStyle = (props) => {
    return {
        "border": `${props.thickness}px solid #f3f3f3`,
        "borderTop": `${props.thickness}px solid #3498db`,
        "width": `${props.size}px`,
        "height": `${props.size}px`
    }
}

const Loader = (props) => {
    return(
        <div className="loader" style={getStyle(props)}></div>
    )
}
Loader.prototypes = {
    /**
     * diameter in px
     */
    size: PropTypes.number,
    /**
     * thicknes in px
     */
    thickness: PropTypes.number

}
export default Loader;