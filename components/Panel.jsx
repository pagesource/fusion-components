import React, { PropTypes } from 'react';

import './Panel.css';
import classnames from 'classnames';

const Panel = ({ children, ...props }) => {
  const { heading, theme } = props;

  return (
    <div className={classnames('panel', `acss-theme-${theme}`, 'acss-background-secondary')}>
      <h3 className={classnames('panelHeading', `acss-theme-${theme}`, 'acss-background-tertiary')}>{heading}</h3>
      <div className="panelBody">{children}</div>
    </div>
  );
};

Panel.propTypes = {
  /**
   * Children
  */
  children: PropTypes.node,
  /**
   * Heading
  */
  heading: PropTypes.string,
  /**
  * Theme
  */
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default Panel;
