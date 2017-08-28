import React, { PropTypes } from 'react';
import classnames from 'classnames';
// Tab Style
import './Tab.css';

const TabGroup = (props) => {
	const { children ,uniqueid } = props;
	const toggle=(e) => {
		e.target.parentElement.parentElement.querySelector('.active').classList.toggle('active')
		e.target.classList.add('active');
	}
	return (

		<div className={classnames('tabs-group')}>
			<ul className={'tab-titles'} >
				{
					children.map(function(data,index){ 
						return(
				          <li onClick={ toggle.bind(this) } key={ 'tt-'+ index } className={classnames('tab-trigger')} >
				              <label htmlFor={ uniqueid + index } className={classnames((index==0)? 'active':'')}>{ data.props.title }</label>
				          </li>
				      )
					})     	
				}		
			</ul>
			<div className={'tab-content'}>
				{ 		
					children.map(function(data,index1){ 
				      return (
				          <div className={classnames('tab-content-item-group') } key={ index1 } checked={ (index1==0)}>
				          <input type={"radio"} id={uniqueid+index1} name={uniqueid} />
				          <div   className={classnames('tab-content-item')}>{ data.props.children }</div>
				          </div> 
				      )
					})     	
				}
			</div>
		</div>    
	);
};

export default TabGroup;
