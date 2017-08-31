import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';

const avatarStyle = css`
width: 96px;
 height: 96px;
border-radius: 50%;`;

const Avatar = ({ src }) => (<img src={src} className={avatarStyle} />);

export default withTheme(Avatar);
