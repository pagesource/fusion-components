import { css } from 'emotion';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const DialogDiv = styled('div')`
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.height};
  background: ${props => props.bg};
  position: fixed;
  z-index: 1;
  margin: 30px;
  top: 100px;
  border-radius: 5px;
`;
const container = css`
  width: 85%;
  margin: 40px;
`;
const close = css`
  font-size: 18px;
  float: right;
  cursor: pointer;
`;

const cancelBtn = css`
  float: left;
  margin: 10%;
`;
const submitBtn = css`
  float: left;
  margin: 30px;
`;
const footerStyle = css`
  padding: 10%;
`;

class Dialog extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: !this.state.open });
  }

  handleSubmit() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Button label="Dialog" onClick={() => this.onClick()}>
          Open Dialog
        </Button>
        {this.state.open ? (
          <DialogDiv
            title="Dialog With Actions"
            onRequestClose={this.handleClose}
          >
            <div className={container}>
              <span
                role="button"
                tabIndex={0}
                className={close}
                onClick={() => this.handleClose()}
                onKeyPress={() => {}}
              >
                X
              </span>
              <h1>{this.props.header}</h1>
              <content>{this.props.content}</content>
              <div className={footerStyle}>
                <div className={cancelBtn}>
                  <Button onClick={() => this.handleClose()}>Cancel</Button>
                </div>
                <div className={submitBtn}>
                  <Button onClick={() => this.handleSubmit()}>Submit</Button>
                </div>
              </div>
            </div>
          </DialogDiv>
        ) : null}
      </div>
    );
  }
}

/* Props Check */
Dialog.propTypes = {
  /**
   *Dialog header
   */
  header: PropTypes.string,

  /**
   *Dialog body content
   */
  content: PropTypes.string,
  // width: PropTypes.number,
  // height: PropTypes.number,
  // bg: PropTypes.string,
  // title: PropTypes.string,
};

/* Deafult Props */
Dialog.defaultProps = {
  // width: 800,
  // height: 300,
  // bg: 'white',
  // title: 'Title content',
  header: 'Header',
  content: 'Your content for the Dialog box can be passed as props value',
};

export default Dialog;
