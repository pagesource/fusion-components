import React, { PropTypes } from 'react';
import classnames from 'classnames';

const HeadingContent = (props) => {
  const { title,children, align } = props;
    const getstyle=(align)=> {
      return {
   		 'textAlign':align,
   	}
  }
	return (
  		<div className={classnames('heading-with-content')}  style={ getstyle(align)}>
  			<h1>{title}</h1>
  			<p>{ children}</p>
  		</div>    
	);
};  



HeadingContent.propTypes = {  	
  title: PropTypes.string,
  children: PropTypes.string,
  align: PropTypes.string
};


HeadingContent.defaultProps = {
  title: '',
  children: '',
  align:'left'
};


export default HeadingContent;