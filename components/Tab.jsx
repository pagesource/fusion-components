import React, { PropTypes } from 'react';
import classnames from 'classnames';
// Tab Style
import './Tab.css';

const Tab = (props) => {
  const { children ,title } = props;
};

Tab.propTypes = {
	/**
	* Tab Title
	*/
	title: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired, 
};

Tab.defaultProps = {
  title: '',
  children:'',
};

export default Tab;