import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import styled from "emotion/react";
import { withTheme } from "theming";
import { theme } from "./themes";

const Panel = props => {
  const {className, children} = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const styledPanel = styled(Panel)`
border:thin solid #aaa;
margin:10px;
background:#fff;
box-shadow: 0.25rem 0.25rem 0.5rem #aaa;
padding:${props => props.theme.panelPadding};
`

export default withTheme(styledPanel);
