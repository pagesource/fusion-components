import React, { PropTypes } from 'react';
import classnames from 'classnames';
// Accordion Style
import './Accordion.css';

const Accordion = (props) => {
	const { children ,title } = props;
};  

Accordion.propTypes = {
  /**
  * Accordion Title
  */
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,  
};

Accordion.defaultProps = {
  title: '',
  children:''
};

export default Accordion;

