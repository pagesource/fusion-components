import React, { PropTypes } from 'react';
import classnames from 'classnames';

const AccordionGroup = (props) => {
  const { children,uniqueid } = props;
	
	return (
		<div className={classnames('accordion-group',uniqueid)}>
			{
				children.map(function(data,index){
					return(
						<div className={ classnames('accordion')} key={index} >
							<input type={"radio"} id={uniqueid+index} name={uniqueid}/>
							<div className="accordion-title">
								<label htmlFor={uniqueid+index} ><span >{data.props.title}</span></label>
							</div>
					   	<div className="accordion-content">
					     	<p>{ data.props.children }</p>
					   	</div>
						</div> )   
					}) 
			}    
		</div>    
	);

};

AccordionGroup.propTypes = {
  /**
  * Accordion Title
  */
 
};

export default AccordionGroup;