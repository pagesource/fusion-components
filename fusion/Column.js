import { css } from 'emotion';
import React from 'react';

const columnStyle = css`
  flex: 1 1 auto;
  margin-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  color: #fff;
  position: relative;
`;
const Column = () => <Column className={columnStyle} />;
export default Column;
