import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const timerStyle = css`
  font-family: 'arial';
`;

class CountdownTimer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      interval: null,
    };
    this.countDownDate = new Date(this.props.endTime).getTime();
    this.timer = this.timer.bind(this);
    const interval = setInterval(this.timer, 1000);
    this.setState({
      interval,
    });
  }

  timer() {
    const now = new Date().getTime(),
      distance = this.countDownDate - now,
      days = Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
    return <span className={timerStyle}>{this.state.timer}</span>;
  }
}

CountdownTimer.propTypes = {
  endTime: PropTypes.string.isRequired,
};

export default CountdownTimer;
