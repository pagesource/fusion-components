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
width:450px;
height:250px;
border:thin solid #aaa;
// padding:${props => props.theme.panelPadding};
// box-shadow:${props => props.theme.panelShadow};
// Until we figure out to get theming working;
padding: 0.5rem;
box-shadow: 0.25rem 0.25rem 0.5rem #ccc;
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
