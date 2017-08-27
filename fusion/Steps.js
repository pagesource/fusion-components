import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import styled from 'emotion/react';
import Link from 'next/link';
import {theme} from './themes';

const StepDiv = styled.div`
  
`
const Step = styled.div`
display: inline-block;
    width: 180px;
    margin: 5px;
    height: 75px;
    /* border-radius: 3px; */
    background: aliceblue;
`
const StepContent = styled.div`
`
const StepTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  position: relative;
  bottom: 10px;
`
const StepDescr = styled.div`
  font-size: 16px;
`
const secDiv = css`
  float: right;
`
const rightArrow = css`
  font-size: 24px;
  position: relative;
  padding: 0px 5px;
  top: -5px;
  left: 15px;
`
const Steps = props => {
    const {steps} = props;
    const stepsDetails = steps !== null ? steps : null;

      return (
        <StepDiv> 
        {stepsDetails &&
        stepsDetails.map((step, index) =>
          <Step key={index}>
              <StepContent>
              <div><img src={step.icon} alt={step.heading} width="30px"/>
              <StepTitle>{step.title}</StepTitle>
              <span className={rightArrow}>&#10145;</span>
              </div>

              <div  className={secDiv}>    
                <StepDescr>{step.description}</StepDescr>
               </div> 
              </StepContent> 
               
          </Step>

          )}
    </StepDiv>
  );
};

/* Props Check */
Steps.propTypes = {
    /**
    *Steps array
    */
    steps: PropTypes.arrayOf(PropTypes.shape({}))
};

export default Steps