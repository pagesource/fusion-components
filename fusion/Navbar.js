import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { css } from "emotion";
import styled from "emotion/react";
import Link from "next/link";
import theme from "./themes";

const NavbarDiv = styled.div`
  display: flex;
  height: 50px;
  background: grey;
  z-index: 1;
  font-size: 24px;
`;
const lists = css`
  display: inline-block;

`;
const links = css`
  display: inline-block;
  width: 120px;
  text-align: center;
  vertical-align: sub;
  padding: 10px 20px;
  &:hover{
    border-bottom: 2px solid black;
    background: silver
  }
`;
const anchor = css`
  text-decoration: none;
  font-size: 24px;
  color: {props.theme.primaryColor}
`;

class Navbar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      open: true
    };
  }

  render() {
    const NavItems = this.props.NavList;
    const navLinks = this.props.links;
    const title = this.props.title;

    return (
      <div>
        <NavbarDiv>
          <div className={lists}>
            {Array.apply(null, Array(3)).map(function(item, i) {
              return (
                <div className={links}>
                  <Link key={i} href={navLinks[i]}>
                    <a className={anchor}>
                      {NavItems[i]}
                    </a>
                  </Link>
                </div>
              );
            }, this)}
          </div>
        </NavbarDiv>
      </div>
    );
  }
}

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
  /**
    *Navbar links
    */
  links: PropTypes.array
};

/* Deafult Props */
Navbar.defaultProps = {
  width: 200,
  bg: "white",
  title: "Home",
  header: "Header",
  NavList: ["Home", "About us", "Contact"],
  links: ["www.google.com", "wwww.facebook.com", "www.twitter.com"]
};

export default Navbar;
