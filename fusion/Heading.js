import { css } from 'emotion';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const headerStyle = css`
  color: black;
  padding: 2px;
  margin: 0;
  border: none;
`;
const H1 = styled('h1')(
  {
    fontSize: 36,
  },
  props => ({ color: props.color })
);

const H2 = styled('h2')(
  {
    fontSize: 30,
  },
  props => ({ color: props.color })
);

const H3 = styled('h3')(
  {
    fontSize: 24,
  },
  props => ({ color: props.color })
);

const Heading = ({ title }) => (
  <div>
    <H1 className={headerStyle}>{title}</H1>

    <H2>{title}</H2>

    <H3>{title}</H3>
  </div>
);

Heading.propTypes = {
  /**
   * title
   */
  title: PropTypes.string,
};

Heading.defaultProps = {
  title: 'Header content',
};

export default withTheme(Heading);
