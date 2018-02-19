import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const formStyle = css`
  & input {
    width: 70%;
    height: 50px;
    font-size: 16px;
  }
  & button {
    font-size: 16px;
    height: 50px;
    width: 200px;
    margin-left: 29px;
    border-radius: 5px;
    border: 1px solid gray;
  }
`;

const EmailSubscribe = ({ action, placeholder }) => (
  <form className={formStyle} action={action}>
    <input placeholder={placeholder} />
    <button type="submit">Submit</button>
  </form>
);

EmailSubscribe.propTypes = {
  action: PropTypes.string,
  placeholder: PropTypes.string,
};

EmailSubscribe.defaultProps = {
  action: '#defaultAction',
  placeholder: 'Email address for latest updates',
};

export default EmailSubscribe;
