import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Navigation.css';

const Navigation = (props) => {
  const { theme, links, align, type } = props;

  return (
    <div className={classnames('navigation', `${type}-navigation`, `acss-theme-${theme}`, `align-${align}`, 'acss-background-secondary')}>
      <ul>
        {links && links.map((link) =>
          <li key={`key-${link.index}`}>
            <a
              href={link.url}
              className={classnames('nav-links', `acss-theme-${theme}`)}
            >
              {link.title}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  /**
  * Theme
  */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Links
  */
  links: PropTypes.arrayOf(PropTypes.shape({})),
  /**
  * Nav Links Alignment
  */
  align: PropTypes.oneOf(['left', 'right'])
};

Navigation.defaultProps = {
  align: 'left',
  theme: 'light'
};

export default Navigation;
