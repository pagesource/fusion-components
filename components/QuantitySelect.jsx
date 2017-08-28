import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './QuantitySelect.css';

const QuantitySelect = (props) => {
   const { name, id ,value } = props;
   var quant = 0; 
	
	const decrement =(e)=>{
		quant = parseInt(e.target.nextSibling.value);
		quant = ( quant >= 1) ? quant-1: quant ;
		e.target.nextSibling.value =quant;
	}

	const increament =(e)=>{
		quant = e.target.previousSibling.value;
		e.target.previousSibling.value = parseInt(quant)+1
	}

  	return (
		<div className="quantity-input">
			<span className="dec" onClick={ decrement }>-</span>
				<input type="text" value={ value }  />
			<span className="inc" onClick={ increament }>+</span>
		</div>  
  	);

};  

QuantitySelect.defaultProps = {
  value: 0,
};

export default QuantitySelect;