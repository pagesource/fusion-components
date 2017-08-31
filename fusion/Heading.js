import { css } from 'emotion';
import styled from 'emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const el = React.createElement;

const headerStyle = css`
    color: black;
    padding: 2px;
    margin: 0;
    border: none;
`;
const H1 = styled.h1(
  {
    fontSize: 36,
  },
  props => ({ color: props.color }),
);

const H2 = styled.h2(
  {
    fontSize: 30,
  },
  props => ({ color: props.color }),
);

const H3 = styled.h3(
  {
    fontSize: 24,
  },
  props => ({ color: props.color }),
);

const H4 = styled.h4(
  {
    fontSize: 18,
  },
  props => ({ color: props.color }),
);

const H5 = styled.h5(
  {
    fontSize: 14,
  },
  props => ({ color: props.color }),
);

const H6 = styled.h6(
  {
    fontSize: 12,
  },
  props => ({ color: props.color }),
);

const heading = styled(
  ({ tag, children, ...props }) => el(tag, props, children),
)`
  color: black;
`;

const Heading = ({ title }) => (<div>
  <H1 className={headerStyle}>
    {title}
  </H1>

  <H2>
    {title}
  </H2>

  <H3>
    {title}
  </H3>
</div>);

Heading.propTypes = {
  /**
   * tag
   */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * title
   */
  title: PropTypes.string,
};

Heading.defaultProps = {
  tag: 'h2',
  title: 'Header content',
};

export default withTheme(Heading);

