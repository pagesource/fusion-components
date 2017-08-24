import {css} from 'emotion';
import PropTypes from 'prop-types';
import React, {Component} from "react";

const timerStyle=css`
    font-family : "arial"
`

class CountdownTimer extends Component {

  constructor(props) {
    super(props);
    this.countDownDate = new Date(this.props.startTime).getTime();
  }

  state = {
    timer : "",
    interval : null
  }

  timer() {

    var now = new Date().getTime(),
        distance = this.countDownDate - now,
        days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.setState({
          timer : days + " Days : " + hours + " Hours : "+ minutes + " Minutes : " + seconds + " Seconds "
        });

        if (distance < 0) {
          clearInterval(this.state.interval);
          this.setState({
            timer : "EXPIRED"
          });
        }
  }

  componentDidMount() {
    var interval = setInterval(this.timer.bind(this), 1000);
    this.setState({
      interval : interval
    })
  }

  render() {
    return (
      <h1 className={timerStyle}>{this.state.timer}</h1>
    )
  }
}

export default CountdownTimer;
