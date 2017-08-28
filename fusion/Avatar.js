import { css } from 'emotion';
import { withTheme } from 'theming';

const avatarStyle = css`
width: 96px;
 height: 96px;
border-radius: 50%;`;

const Avatar = (props) => (<img src={props.src} className={avatarStyle} />);

export default withTheme(Avatar);
