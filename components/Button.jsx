import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button.attrs({

	// Attributes
	disabled: props => props.disabled,
	onClick: props => props.onClick

})`
	color: ${props => props.theme.fg};
	border: 2px solid ${props => props.theme.fg};
	background: ${props => props.theme.bg};

	cursor: pointer;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
`;

/* Props Check */
Button.propTypes = {
  /**
  * onClick Event
  */
  onClick: PropTypes.func,
	/**
  * Disabled
  */
  disabled: PropTypes.bool
};

/* Deafult Props */
Button.defaultProps = {
  disabled: false,
};

export default Button;
