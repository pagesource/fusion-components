import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';

const avatarStyle = css`
width: 96px;
 height: 96px;
border-radius: 50%;`;

const Avatar = ({ src, alt }) => (<img src={src} className={avatarStyle} alt={alt} />);

/* Default Props */
Avatar.defaultProps = {
  src: 'http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg',
  alt: 'Avatar Image',
};

export default withTheme(Avatar);
