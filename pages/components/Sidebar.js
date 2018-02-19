import { css } from "emotion";
import Link from "next/link";
import React from "react";

const linkStyle = {
  marginRight: 15
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

  & ul {
    padding: 20px;
  }

  & ul li {
    list-style: none;
    padding: 10px 0;
  }
`;

const SideBar = () => (
  <nav className={navStyle}>
    <ul>
      <li>
        <Link href="/kitchen-sink">
          <a href="/kitchen-sink" style={linkStyle}>
            Kitchen Sink
          </a>
        </Link>
      </li>
      <li>
        <Link href="/atomic-components">
          <a href="/atomic-components" style={linkStyle}>
            Atomic
          </a>
        </Link>
      </li>
      <li>
        <Link href="/content-components">
          <a href="/content-components" style={linkStyle}>
            Content
          </a>
        </Link>
      </li>
      <li>
        <Link href="/loader-components">
          <a href="/loader-components" style={linkStyle}>
            Progress & Activity
          </a>
        </Link>
      </li>
      <li>
        <Link href="/navigation-components">
          <a href="/navigation-components" style={linkStyle}>
            Navigation
          </a>
        </Link>
      </li>
      <li>
        <Link href="/chart-components">
          <a href="/chart-components" style={linkStyle}>
            Charting
          </a>
        </Link>
      </li>
      <li>
        <Link href="/coming-soon">
          <a href="/coming-soon" style={linkStyle}>
            Form Elements
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default SideBar;
