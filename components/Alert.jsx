import React  from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Alert.css';

const Alert = (props) => {

  const { position, type , id , msg ,title  } = props;

  return (
            <div className={ classnames('alert-buttons')} ><button className={ classnames('alert-btn', type, position )} ><label htmlFor={'alert-' + id }>{title}</label></button>
            <input type="checkbox" id={'alert-'+ id } />
            <div className={classnames('alert-content', type, position )} ><label htmlFor={'alert-' + id } className={"close"}>x</label>{ msg }</div></div>
  );

};

/* Props Check */
Alert.propTypes = {
  /**
  * Position of Alert
  */
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  /**
  * Message to Display
  */
  msg: PropTypes.string,
  /**
  * Title of Alert
  */
  title: PropTypes.string,
  /**
  * Type of Alert
  */
  type: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
};

Alert.defaultProps = {
  position: "top-right",
  msg: "Custom Message",
  title:" Title of Alert",
};

export default Alert;
