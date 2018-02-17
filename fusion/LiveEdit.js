import { css } from 'emotion';
import styled from 'react-emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { LiveEditor, LivePreview, LiveProvider } from 'react-live';

const StyledProvider = styled(LiveProvider)`
  border-radius: 3px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 100px;
`;

const LiveWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled(LiveEditor)`
  background: #999;
  font-family: 'Source Code Pro', monospace;
  font-size: 14px;
  height: 350px;
  overflow: scroll;
  ${column};
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const LiveEdit = ({ noInline, code }) => (
  <StyledProvider code={code} noInline={noInline} mountStylesheet={false}>
    <LiveWrapper>
      <StyledEditor />
      <StyledPreview />
    </LiveWrapper>
  </StyledProvider>
);
LiveEdit.propTypes = {
  noInline: PropTypes.string,
  code: PropTypes.string,
};
LiveEdit.defaultProps = {
  noInline: PropTypes.string,
  code: PropTypes.string,
};

export default LiveEdit;
