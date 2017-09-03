import styled from 'emotion/react';
import React from 'react';
import { withTheme } from 'theming';

const Panel = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const styledPanel = styled(Panel)`
  border: thin solid #aaa;
  margin: 10px;
  background: #${props => props.theme.panelBackground};
  box-shadow: ${props => props.theme.panelShadow};
  padding: ${props => props.theme.panelPadding};
`;

export default withTheme(styledPanel);
