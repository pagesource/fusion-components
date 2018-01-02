import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { withTheme } from "theming";

const buttonStyle = theme => css`
	background-color: ${theme.buttonColor};
	color: ${theme.buttonTextColor};
	border-radius: 5px;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border: none;
	cursor: pointer;
`;

const Button = props => {
	const { children, onClick, disabled, theme } = props;
	return (
		<button
			type="button"
			onClick={onClick}
			className={buttonStyle(theme)}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	/**
	 * onClick Function
	 */
	onClick: PropTypes.func,
	/**
	 * Children
	 */
	children: PropTypes.string,
	/**
	 * disabled
	 */
	disabled: PropTypes.bool
};

Button.defaultProps = {
	disabled: false
};
export default withTheme(Button);
