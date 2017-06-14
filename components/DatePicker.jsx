import React, { PropTypes } from 'react';
import classnames from 'classnames';
// DatePicker Style
import './DatePicker.css';

const Datepicker = (props) => {
   const { max , min, name, id } = props;

  	return (

    		<div className={classnames('custom-datepicker')}  >
    		  <input type="date" min={min} max={max} id={id} name={name} />
    		</div>    
  	);
};  



Datepicker.propTypes = {
  	
  max: PropTypes.string,
  
  min: PropTypes.string,
  
  name: PropTypes.string,

  id: PropTypes.string
};



export default Datepicker;