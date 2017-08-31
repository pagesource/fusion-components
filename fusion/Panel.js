import styled from 'emotion/react';
import React from 'react';
import { withTheme } from 'theming';

const Panel = ({ className, children }) => (<div className={className}>
  {children}
</div>);

const styledPanel = styled(Panel)`
border:thin solid #aaa;
margin:10px;
background:#fff;
box-shadow: 0.25rem 0.25rem 0.5rem #aaa;
padding:${props => props.theme.panelPadding};
`;

export default withTheme(styledPanel);
