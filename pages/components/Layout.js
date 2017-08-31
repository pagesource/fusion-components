import { css } from 'emotion';
import React from 'react';
import Header from './Header';
import SideBar from './Sidebar';

const layoutContainer = css`
  margin: 20;
  padding: 20;
  border: '1px solid #DDD'
`;

const content = css`
width:79%;
margin-left:200px;
padding:3rem;
background:#eaeaea;
font-family: Arial, Helvetica, sans-serif;
color#red;

& h3{
  margin-top:45px;
  border-bottom:thick solid #aaa;
}
& pre{
  background:#333;
  color:#f9f9f9;
  margin:10px;
  padding:10px;
}`;

const Layout = ({ children }) => (<div className={layoutContainer}>
  <Header />
  <SideBar />
  <div className={content}>
    {children}
  </div>
</div>);

export default Layout;
