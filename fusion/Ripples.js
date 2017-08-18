import PropTypes from 'prop-types';
import {keyframes, css} from 'emotion';
import styled from 'emotion/react';
import { withTheme } from 'theming';
import {theme} from './themes';

const RippleDiv = styled('div')`
  position: relative;
  width: 300px;
  height: 300px;
  top: 100px;
  left: 100px
`
const rippleStyle = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
`
const ripple=css`
  border: 7px solid #2F7DE1;
  width: 100px;
  height: 100px;
  border-radius: 500px;
  position: absolute;
`
const ripple1 = css`
  animation: ${rippleStyle} 3s linear infinite;
`

const ripple2= css` 
  animation: ${rippleStyle} 3s linear infinite 0.75s;
`
const ripple3 =css`
  animation: ${rippleStyle} 3s linear infinite 1.5s;
`
const Ripples = (props) => {
  return ( 
      <RippleDiv>
          <ripple css={`composes: ${ripple1} ${ripple} ;`}></ripple>
          <ripple css={`composes: ${ripple2} ${ripple} ;`}></ripple>
          <ripple css={`composes: ${ripple3} ${ripple} ;`}></ripple>
      </RippleDiv>
  );
};

export default withTheme(Ripples);