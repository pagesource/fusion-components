import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import styled from "emotion/react";
import { withTheme } from "theming";
import theme from "./themes";

const PanelStyle = css`

border:thin solid #aaa;
margin:10px;
background:#fff;
box-shadow: ${theme.panelShadow};
padding:${theme.panelPadding};

// Until we figure out to get theming working;

`;

const Panel = props => {
  console.log(props.theme);
  return (
    <div className={PanelStyle}>
      {props.children}
    </div>
  );
};

export default withTheme(Panel);
