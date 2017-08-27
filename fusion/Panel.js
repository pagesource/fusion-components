import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import styled from "emotion/react";
import { withTheme } from "theming";
import { theme } from "./themes";

// const Panel = withTheme(styled("div")`
// width:450px;
// height:250px;
// padding:${props => props.theme.panelPadding};
// box-shadow:${props => props.theme.panelShadow};
// `);

const PanelStyle = css`

border:thin solid #aaa;
padding: 10px;
margin:10px;
background:#fff;
box-shadow: 0.25rem 0.25rem 0.5rem #aaa;
// padding:${props => props.theme.panelPadding};

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
