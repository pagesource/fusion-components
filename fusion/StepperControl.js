import { css } from 'emotion';
import styled from 'react-emotion';
import React from 'react';
import Button from './Button';

const styles = {
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

const Step = styled('div')`
  display: inline-block;
  margin: 10px 20px;
`;
const Stepper = styled('div')``;
const StepButton = styled('div')`
  width: 160px;
  border-radius: 7px;
  height: 50px;
  text-align: center;
  background: skyblue;
  &:hover {
    background: Aquamarine;
  }
`;
const rightArrow = css`
  font-size: 24px;
  position: relative;
  padding: 0px 5px;
  top: 17px;
  left: -4px;
`;
const stepName = css`
  position: relative;
  top: 15px;
`;
const container = css`
  width: 100%;
  background: aliceblue;
  height: auto;
`;

class ControlStepper extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      stepIndex: null,
      visited: [],
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
  }

  componentWillMount() {
    const { stepIndex, visited } = this.state;
    this.setState({ visited: visited.concat(stepIndex) });
  }

  componentWillUpdate(nextState) {
    if (Object.keys(nextState).length === 0 && nextState.constructor === Object)
      return;
    const { stepIndex, visited } = nextState;
    if (!visited.indexOf(stepIndex)) {
      // eslint-disable-next-line react/no-will-update-set-state
      this.setState({ visited: visited.concat(stepIndex) });
    }
  }

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

  handleNext() {
    const { stepIndex } = this.state;
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  }

  handlePrev() {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  }

  render() {
    const { stepIndex, visited } = this.state;

    return (
      <div style={styles.root}>
        <p>
          <a
            href="#inline"
            onClick={event => {
              event.preventDefault();
              this.setState({ stepIndex: null, visited: [] });
            }}
          >
            Click here
          </a>{' '}
          to reset the example.
        </p>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0)} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
              <span className={stepName}>STEP 1</span>
            </StepButton>
          </Step>
          <span className={rightArrow}>&#10145;</span>
          <Step completed={visited.indexOf(1)} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
              <span className={stepName}>STEP 2 </span>
            </StepButton>
          </Step>
          <span className={rightArrow}>&#10145;</span>
          <Step completed={visited.indexOf(2)} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
              <span className={stepName}>STEP 3</span>
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <p className={container}>{this.getStepContent(stepIndex)}</p>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <Button
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
                style={styles.backButton}
              >
                Prev
              </Button>
              <Button style={{ marginLeft: 30 }} onClick={this.handleNext}>
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ControlStepper;
