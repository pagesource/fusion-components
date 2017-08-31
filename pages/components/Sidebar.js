import { css } from 'emotion';
import Link from 'next/link';
import React from 'react';

const linkStyle = {
  marginRight: 15,
};

const navStyle = css`
  width: 250px;
  position: fixed;
  left: 0;
  top: 75px;
  height: 100%;
  background-color: #333;
  color: #f9f9f9;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;

  & a {
    color: #f9f9f9;
    text-decoration: none;
  }
  & a:hover {
    color: #f60;
  }

  & ul li {
    list-style: none;
    padding: 10px 0;
  }
`;

const SideBar = () => (<nav className={navStyle}>
  <ul>
    <li>
      <Link href="/kitchen-sink">
        <a style={linkStyle}>Kitchen Sink</a>
      </Link>
    </li>
    <li>
      <Link href="/atomic-components">
        <a style={linkStyle}>Atomic</a>
      </Link>
    </li>
    <li>
      <Link href="/content-components">
        <a style={linkStyle}>Content</a>
      </Link>
    </li>
    <li>
      <Link href="/loader-components">
        <a style={linkStyle}>Progress & Activity</a>
      </Link>
    </li>
    <li>
      <Link href="/navigation-components">
        <a style={linkStyle}>Navigation</a>
      </Link>
    </li>
    <li>
      <Link href="/chart-components">
        <a style={linkStyle}>Charting</a>
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <a style={linkStyle}>Form Elements</a>
      </Link>
    </li>
  </ul>
</nav>);

export default SideBar;
