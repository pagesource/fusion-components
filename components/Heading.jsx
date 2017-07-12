import React  from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Heading.css';

const Heading=(props)=>{
    const { href, title } = props;
    return(
      <div className={ classnames('product-title')}>
        <h3>{ href ? <a href={href}>{title}</a> : title }</h3>
      </div>
    );
};

Heading.propTypes = {
  /**
   * href
  */
  href: PropTypes.string,
  /**
   * title
  */
  title: PropTypes.string,
};

Heading.defaultProps = {
  href: '',
  title: ''
};

export default Heading;
