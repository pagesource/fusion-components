import { css } from 'emotion';
import styled from 'emotion/react';
import { Link } from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const NavbarDiv = styled.div`
  display: flex;
  height: 40px;
  background: skyblue;
  z-index: 1;
  font-size: 16px;
  color:#774003;
  text-align:vertical;
  box-shadow;0 2px 3px #ccc;
`;
const lists = css`display: inline-block;`;

const links = css`
  display: inline-block;
  width: 120px;
  text-align: center;
  vertical-align: sub;
  padding: 10px 20px;
  transition: 0.5s, height 4s;
  &:hover {
    border-bottom: 2px solid DarkCyan;
    background: PaleTurquoise;
    color: #fff;
  }
`;
const anchor = css`
  text-decoration: none;
  font-size: 16px;
  color: {props.theme.primaryColor};
  color:midnightblue;
  text-transform:
`;

const Navbar = ({ NavList }) => (<NavbarDiv>
  <div className={lists}>
    {!!NavList && NavList.map(({ link, navName } , i) => (<div key={i} className={links}>
      <a className={anchor} key={link} href={link}>{navName}</a>
    </div>))}
  </div>
</NavbarDiv>);

/* Props Check */
Navbar.propTypes = {
  /**
   *NavbarNavbar width
   */
  width: PropTypes.number,
  /**
   *Navbar background
   */
  bg: PropTypes.string,
  /**
   *Navbar title
   */
  title: PropTypes.string,
  /**
   *Navbar names
   */
  NavList: PropTypes.array,
};

/* Deafult Props */
Navbar.defaultProps = {
  width: 200,
  bg: 'white',
  title: 'Home',
  header: 'Header',
  NavList: [
    {
	  navName: 'Home',
	  link: '/home',
    },
    {
	  navName: 'Recent',
	  link: '/recent',
    },
    {
	  navName: 'About Us',
	  link: '/about',
    },
    {
	  navName: 'Contact Us',
	  link: '/Contact',
    },
  ],
};

export default Navbar;
