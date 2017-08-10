import Link from "next/link";
import { css } from "emotion";
const linkStyle = {
  marginRight: 15
};

const navStyle = css`
width:25%;
position:fixed;
left:0;
top:75px;
height:100%;
background-color:#333;
color:#f9f9f9;

& a{
  color:#f9f9f9;
  text-transform:none;
}
& a:hover{
  color:sea-blue
}
`;

const SideBar = () =>
  <nav className={navStyle}>
    <h3>Components</h3>
    <ul>
      <li>
        <Link href="/kitchen-sink">
          <a style={linkStyle}>Kitchen Sink</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a style={linkStyle}>Avatar</a>
        </Link>
      </li>
      <li>
        <Link href="/avatar">
          <a style={linkStyle}>About</a>
        </Link>
      </li>
    </ul>
  </nav>;

export default SideBar;
