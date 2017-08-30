import { css } from 'emotion';
import styled from 'emotion/react';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const DropdownDiv = styled.div`
  //width: ${props => props.width};
  width: 200px;
  height: auto; 
  background: grey;
  // background: ${props => props.bg}; 
  z-index: 1; 
  text-align: center;
  font-size: 24px;
`;
const container = css`

`;
const dropdownMenu = css`
  width: 200px;
  content: "";
  width: ${props => props.width}px;
  height: 40px;
  background: grey;
  border-radius: 3px;
  opacity: 0.8;
  text-align: center;
  font-size: 24px;
`;
const dropdownList = css`
 width: 200px;
 width: ${props => props.width}px;  
 list-style-type: none !important;
 margin: 0;
 padding-left: 0;
 cursor: pointer;
`;
const lists = css`
  width: ${props => props.width}px;
  padding: 3px;
  border-radius: 3px;
  &:hover{
    background: silver
  }
`;
const links = css`
  text-decoration: none;
  font-size: 18px;
`;
const dropIcon = css`
&:before{
  content: &#9650;
}
  &:after {
    content: "▼";
    font-size: 16px;
    padding: 12px 8px;
    right: 10px;
    top: 0;
    z-index: 1;
    text-align: center;
    width: 10%;
    height: 100%;
    pointer-events: none;    
}
`;

class Dropdown extends PureComponent {
  constructor() {
    super();
    this.state = {
	  open: false,
    };
  }

  render() {
    const { ListItems } = this.props;

    return (<div>
      <div className={dropdownMenu} onClick={() => this.onClick()}><span className={dropIcon}>Dropdown List</span>
      </div>
      {this.state.open ?
        <DropdownDiv>
          <div className={container}>
            <ul className={dropdownList}>
              {ListItems.map(({ link, option }, j) => (<li className={lists}>
                <a className={links} href={link}>{option}</a>
              </li>))}
            </ul>
          </div>
        </DropdownDiv>
        : null}
    </div>);
  }

  onClick() {
    this.setState({ open: !this.state.open });
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
  ListItems: PropTypes.array,

};

/* Deafult Props */
Dropdown.defaultProps = {
  width: 200,
  bg: 'white',
  title: 'Dropdown Name',
  header: 'Header',
  ListItems: [
    {
	  option: 'Option 1',
	  link: '//www.google.com',
    },
    {
	  option: 'Option 2',
	  link: '//www.facebook.com',
    },
    {
	  option: 'Option 3',
	  link: '//www.twitter.com',
    },
  ],
};

export default Dropdown;
