import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends Component {

  // Cosntructor
  constructor(props){
    super(props);
    // State
    this.state = {
      selected: this.props.selected
    }
  }

  // Events
  handleClick(index, event) {
      event.preventDefault();
      this.setState({
        selected: index
      });
  }

  // Rendering the Titles
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index} className={activeClass}>
          <a href=""
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }

}

/* Props Check */
Tabs.propTypes = {
  /**
  * Selected Tab
  */
  selected: PropTypes.number
};

/* Default Props */
Tabs.defaultProps = {
  selected:0
};

export default Tabs;
