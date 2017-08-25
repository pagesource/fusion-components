import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {css} from 'emotion';
import styled from 'emotion/react';

const DropdownDiv = styled.div`
  //width: ${props =>  props.width};
  width: 200px;
  height: auto; 
  background: grey;
  // background: ${props =>  props.bg}; 
  z-index: 1; 
  text-align: center;
  font-size: 24px;
`
const container = css`

`
const dropdownMenu = css`
  width: 200px;
  content: "";
  width: ${props =>  props.width}px;
  height: 40px;
  background: grey;
  border-radius: 3px;
  opacity: 0.8;
  text-align: center;
  font-size: 24px;
`
const dropdownList = css`
 width: 200px;
 width: ${props =>  props.width}px;  
 list-style-type: none !important;
 margin: 0;
 padding-left: 0;
`
const listItems = css`
  width: ${props =>  props.width}px;
  padding: 3px;
  border-radius: 3px;
  &:hover{
    background: silver
  }
`

class Dropdown extends React.Component {
    constructor() {
    super();
      this.state = {
       open: false,
      };
    }

  render() {
  
    return (
      <div>
        <div className={dropdownMenu} onClick={() => this.onClick()}>Dropdown List</div>
      {
          this.state.open
            ? 
            <DropdownDiv>
              <div className={container}>
                  <ul className={dropdownList}>
                      {Array.apply(null, Array(3)).map(function(item, j){                                        
                         return (
                            <li className={listItems}>List Item {j}</li>
                          );                
                        }, this)} 
                  </ul>
              </div>
          </DropdownDiv>
            : null
        }
      </div>
    );
  }
  onClick() {
    this.setState({open: !this.state.open});
  }
}

/* Props Check */
Dropdown.propTypes = {
    /**
    *Dropdown width
    */
    width: PropTypes.number,
    /**
    *Dropdown background
    */
    bg: PropTypes.string,
    /**
    *Dropdown title
    */
    title: PropTypes.string,
    /**
    *Dropdown display status
    */
    open: PropTypes.string,
    /**
    *Dropdown list items
    */
    ListItam: PropTypes.array
};

/* Deafult Props */
Dropdown.defaultProps = {
  width: 200,
  bg:"white",
  title: "Dropdown Name",
  header: "Header",
};

export default Dropdown;