import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const status = css`
  width: 90%;
  position: fixed;
  top: 10px;
  left: 5%;
  right: 5%;
  z-index: 1000;
  padding: 15px;
  border-radius: 10px;
  background-color: #ff8707;
  text-align: center;
`;
const hide = css`
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -ms-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  opacity: 0;
`;

class StatusMessage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      message: this.props.message,
      hide: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hide,
      });
    }, this.state.time);
  }

  render() {
    return (
      <div className={`${status} ${this.state.hide}`}>{this.state.message}</div>
    );
  }
}

StatusMessage.propTypes = {
  time: PropTypes.number,
  message: PropTypes.string,
};

StatusMessage.defaultProps = {
  time: 2000,
  message: 'Status: Task completed!',
};

export default StatusMessage;
