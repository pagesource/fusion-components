import { css } from 'emotion';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';

const NavbarDiv = styled('div')`
  display: flex;
  height: 40px;
  background: skyblue;
  z-index: 1;
  font-size: 16px;
  color:#774003;
  text-align:vertical;
  box-shadow;0 2px 3px #ccc;
`;
const lists = css`
  display: inline-block;
  margin: 0;
`;

const links = css`
  display: inline-block;
  width: 120px;
  text-align: center;
  vertical-align: middle;
  padding: 10px 20px;
  transition: 0.5s, height 4s;
  &:hover {
    border-bottom: 2px solid DarkCyan;
    background: PaleTurquoise;
    color: #fff;
  }
`;

const submenus = css`
  position: absolute;
  display: none;
  margin-top: 0px;

  & li {
    display: block;
    border-bottom: 1px solid blue;
  }
`;

const subMenuLinks = css`
  display: inline-block;
  width: 120px;
  text-align: center;
  vertical-align: middle;
  padding: 0px 20px;
  transition: 0.5s, height 4s;
  &:hover div {
    display: block;
    background: skyblue;
    border-top: 1px solid blue;
  }
`;
const anchor = css`
  text-decoration: none;
  font-size: 16px;
  color: {props.theme.primaryColor};
  color:midnightblue;
  text-transform:
`;

const Navbar = () => {
  let toRender;
  return (
    <NavbarDiv>
      <ul className={lists}>
        {!!Navbar.defaultProps &&
          Navbar.defaultProps.NavList.map(item => {
            {
              toRender = item.submenu ? (
                <ul className={subMenuLinks} key={item.navName}>
                  <NavbarItem
                    link={item.link}
                    navName={item.navName}
                    key={item.navName}
                  />
                  <div className={submenus}>
                    {item.submenu.map(items => (
                      <NavbarItem
                        link={items.link}
                        navName={items.navName}
                        key={items.navName}
                      />
                    ))}
                  </div>
                </ul>
              ) : (
                <NavbarItem
                  link={item.link}
                  navName={item.navName}
                  key={item.navName}
                />
              );
            }
            return toRender;
          })}
      </ul>
    </NavbarDiv>
  );
};

const NavbarItem = ({ link, navName }) => (
  <li className={links}>
    <a className={anchor} key={link} href={link}>
      {navName}
    </a>
  </li>
);

NavbarItem.propTypes = {
  link: PropTypes.string,
  navName: PropTypes.string,
};
NavbarItem.defaultProps = {
  link: 'DefaultLink',
  navName: 'DefaultNavName',
};

/* Deafult Props */
Navbar.defaultProps = {
  header: 'Header',
  NavList: [
    {
      navName: 'Home',
      link: '/home',
    },
    {
      navName: 'Recent',
      link: '/recent',
      submenu: [
        {
          navName: 'Facebook',
          link: '/fb.com',
        },
        {
          navName: 'Twitter',
          link: '/twitter.com',
        },
        {
          navName: 'Snapchat',
          link: '/sc.com',
        },
      ],
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
