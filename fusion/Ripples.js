import React from 'react';
import { css, keyframes } from 'emotion';
import styled from 'react-emotion';
import { withTheme } from 'theming';

const RippleDiv = styled('div')`
  position: relative;
  width: 300px;
  height: 300px;
  top: 100px;
  left: 100px;
`;
const rippleStyle = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
`;
const ripple = css`
  border: 7px solid #2f7de1;
  width: 100px;
  height: 100px;
  border-radius: 500px;
  position: absolute;
`;
const Ripple1 = css`
  animation: ${rippleStyle} 3s linear infinite;
`;

const Ripple2 = css`
  animation: ${rippleStyle} 3s linear infinite 0.75s;
`;
const Ripple3 = css`
  animation: ${rippleStyle} 3s linear infinite 1.5s;
`;

const Ripples = () => (
  <RippleDiv>
    <ripple
      css={`
        composes: ${Ripple1} ${ripple};
      `}
    />
    <ripple
      css={`
        composes: ${Ripple2} ${ripple};
      `}
    />
    <ripple
      css={`
        composes: ${Ripple3} ${ripple};
      `}
    />
  </RippleDiv>
);

export default withTheme(Ripples);
