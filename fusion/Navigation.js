import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Navigation = ({ theme, links, align, type }) => (
  <div
    className={classnames(
      'navigation',
      `${type}-navigation`,
      `acss-theme-${theme}`,
      `align-${align}`,
      'acss-background-secondary'
    )}
  >
    <ul>
      {links &&
        links.map(link => (
          <li key={`key-${link.index}`}>
            <a
              href={link.url}
              className={classnames('nav-links', `acss-theme-${theme}`)}
            >
              {link.title}
            </a>
          </li>
        ))}
    </ul>
  </div>
);

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
  align: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.string,
};

Navigation.defaultProps = {
  align: 'left',
  theme: 'light',
  links: [],
  type: '',
};

export default Navigation;
