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
    const NavList = this.props.NavList;
    const title = this.props.title;

    return (
      <div>
        <NavbarDiv>
          <div className={lists}>
            {Array.apply(null, Array(3)).map(function(item, i) {
              return (
                <div className={links}>
                  <Link key={i} href={NavList[i].link}>
                    <a className={anchor}>
                      {NavList[i].navName}
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
  NavList: PropTypes.object,
 };

/* Deafult Props */
Navbar.defaultProps = {
  width: 200,
  bg: "white",
  title: "Home",
  header: "Header",
  NavList: [
            {
              "navName": "Home",
              "link":"/home"
            },
            {
              "navName":"Recent",
             "link":"/recent"
           },
            {
              "navName": "About Us",
              "link":"/about"
            },
            {
              "navName": "Contact Us",
              "link":"/Contact"}
          ],

};

export default Navbar;
