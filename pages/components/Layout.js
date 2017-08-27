import { css } from "emotion";
import styled from "emotion/react";
import Header from "./Header";

import SideBar from "./Sidebar";

const layoutContainer = css`
  margin: 20;
  padding: 20;
  border: '1px solid #DDD'
`;

const content = css`
width:95%;
margin-left:25%;
padding:1rem;
background:#f9f9f9;
font-family: Arial, Helvetica, sans-serif;
color#red;
`;

const Layout = props =>
  <div className={layoutContainer}>
    <Header />
    <SideBar />
    <div className={content}>
      {props.children}
    </div>
  </div>;

export default Layout;
