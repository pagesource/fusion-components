import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const timerStyle = css`
    font-family : "arial"
`;

class CountdownTimer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      interval: null,
    };
    this.countDownDate = new Date(this.props.endTime).getTime();
  }

  componentDidMount() {
    const interval = setInterval(this.timer.bind(this), 1000);
    this.setState({
      interval,
    });
  }

  timer() {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % ((1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor(distance % ((1000 * 60 * 60) / (1000 * 60)));
    const seconds = Math.floor(distance % ((1000 * 60) / 1000));

    this.setState({
      timer: `${days} Days - ${hours} : ${minutes} : ${seconds}`,
    });

    if (distance < 0) {
      clearInterval(this.state.interval);
      this.setState({
        timer: 'The time is up!!',
      });
    }
  }

  render() {
    return (<span className={timerStyle}>
      {this.state.timer}
    </span>);
  }
}

CountdownTimer.propTypes = {
  endTime: PropTypes.string.isRequired,
};

export default CountdownTimer;
