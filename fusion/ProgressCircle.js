import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const valueStyle = css`
  font-weight: bold;
  font-size: 35px;
  margin: auto;
  text-align: center;
`;

const ProgressStyle = css`
  border: 10px solid #aaa;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
`;

const ProgressCircle = ({ value }) => (
  <div
    css={`
      composes: ${ProgressStyle};
    `}
    value={value}
  >
    <div className={valueStyle}>{value}%</div>
  </div>
);

/* Props Check */
ProgressCircle.propTypes = {
  /**
   * Progress Length
   */
  value: PropTypes.number,
};

/* Deafult Props */
ProgressCircle.defaultProps = {
  value: 1 / 3 * 100,
};

export default withTheme(ProgressCircle);
