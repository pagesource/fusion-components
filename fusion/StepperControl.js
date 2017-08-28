import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import styled from 'emotion/react';
import Link from 'next/link';
import {theme} from './themes';
import Button from "./Button";

const getStyles = () => {
  return {
    root: {
      width: '100%',
      maxWidth: 700,
      margin: '40px',
    },
    content: {
      margin: '0 16px',
    },
    actions: {
      marginTop: 12,
    },
    backButton: {
      marginRight: 12,
    },
  };
};

const Step = styled.div`
  display: inline-block;
  margin: 10px 20px;
`
const Stepper = styled.div`

`
const StepButton = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    background: skyblue;
    cursor: pointer;
    &:hover{
    background: Aquamarine;
  }
`
const rightArrow = css`
   display: inline-block;
    position: relative;
    width: 130px;
    border-bottom: 2px solid black;
    padding: 0px 5px;
    top: 5px;
   
`
const stepName = css`
    position: relative;
    top: 5px;
`
const container = css`
    width: 100%;
    background: aliceblue;
    height: auto;
`

class ControlStepper extends React.Component {

  state = {
    stepIndex: null,
    visited: [],
  };

  componentWillMount() {
    const {stepIndex, visited} = this.state;
    this.setState({visited: visited.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, visited} = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({visited: visited.concat(stepIndex)});
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'First step content......';
      case 1:
        return 'Second step content......';
      case 2:
        return 'Third step content......';
      default:
        return 'Click a step to get started.';
    }
  }

  render() {
    const {stepIndex, visited} = this.state;
    const styles = getStyles();

    return (
      <div style={styles.root}>
        <p>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              this.setState({stepIndex: null, visited: []});
            }}
          >
            Click here
          </a> to reset the example.
        </p>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              <span className={stepName}>1</span>
            </StepButton>
          </Step>
          <div className={rightArrow}></div>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              <span className={stepName}>2 </span>
            </StepButton>
          </Step>
          <div className={rightArrow}></div>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              <span className={stepName}>3</span>
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <p className={container}>{this.getStepContent(stepIndex)}</p>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <Button disabled={stepIndex === 0}  onClick={this.handlePrev}  style={styles.backButton}>Prev</Button>
              <Button style="margin-left: 30px" onClick={this.handleNext}>Next</Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ControlStepper;