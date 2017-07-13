import React  from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './HeadingWithContent.css';

const HeadingWithContent = (props) => {

  const { title, children, align } = props;

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

HeadingWithContent.propTypes = {
  /**
   * title
  */
  title: PropTypes.string,
  /**
   * children
  */
  children: PropTypes.string,
  /**
   * alignment
  */
  align: PropTypes.string
};

HeadingWithContent.defaultProps = {
  align:'left'
};

export default HeadingWithContent;
