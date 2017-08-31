import React from 'react';
import { css } from 'emotion';

const headerStyles = css`
position:fixed;
height:75px;
top:0;
left:0;
padding: 0 20px;
width:100%;
background:#fff;
box-shadow:0 3px 5px #aaa;
z-index:1000;
`;

const Header = () => (<header className={headerStyles}>
  <h1>Fusion Component Library</h1>
</header>);

export default Header;
