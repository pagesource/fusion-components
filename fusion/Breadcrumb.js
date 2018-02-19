import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const navWrapper = css`
  user-select: none;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
`;
const ulStyle = css`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    align-items: center;
    display: flex;

    & a {
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      color: #3273dc;
      display: flex;
      justify-content: center;
      padding: 0.5em 0.75em;
      &:hover {
        color: #363636;
      }
    }

    &:first-of-type a {
      padding-left: 0;
    }
    &:last-of-type a {
      color: #363636;
      cursor: default;
      pointer-events: none;
    }
  }
  & li:not(:first-child):before {
    color: #4a4a4a;
    content: '\\0002f';
  }
`;

const Breadcrumb = ({ links, onClick }) => (
  <nav className={navWrapper}>
    <ul className={ulStyle}>
      {links.map(link => (
        <BreadcrumbLink
          onClick={onClick}
          key={link.name}
          id={link.id}
          name={link.name}
        />
      ))}
    </ul>
  </nav>
);

const BreadcrumbLink = ({ name, id, onClick }) => (
  <li>
    <button onClick={() => onClick({ name, id })} href="javascript:void(0)">
      {name}
    </button>
  </li>
);

Breadcrumb.propTypes = {
  /**
   * Array of breadcrumbs
   */
  links: PropTypes.arrayOf(PropTypes.string),
  /**
   * On click handler
   */
  onClick: PropTypes.func,
};

Breadcrumb.defaultProps = {
  links: [
    { id: 0, name: 'Home' },
    { id: 1, name: 'Men' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Wallets & Belts' },
  ],
  onClick: () => {},
};

BreadcrumbLink.propTypes = {
  /**
   * Name of the link
   */
  name: PropTypes.string,
  /**
   * Id of the link
   */
  id: PropTypes.number,
  /**
   * On Click handler
   */
  onClick: PropTypes.func,
};

BreadcrumbLink.defaultProps = {
  name: 'Link',
  id: 0,
  onClick: () => {},
};

export default withTheme(Breadcrumb);
