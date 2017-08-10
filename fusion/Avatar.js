import {css} from 'emotion';
import styled from 'emotion/react';
import { withTheme } from 'theming'


const avatarStyle=css`
width: 96px;
 height: 96px;
border-radius: 50%;
`


const Avatar = (props) => {
  return (

   <img src={props.src}
   className={avatarStyle}
   />

  );
};

export default withTheme(Avatar);