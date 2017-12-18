import React, { PropTypes } from 'react';
import { css } from 'emotion';


const Label = (props) => {
  const {
    className,
    disabled,
    id,
    required,
    validationRequiredStateIndicator = '*',
    validationState,
    value,
    color,
    errorColor = '#FF0000',
    successColor = '#00FF00',
    warningColor = '#FFA500',
    disabledColor = '#dddddd',
    fontSize = '14px',
    ...rest
  } = props;

  const thisClassName = className ? className : '';
  const labelStyle = css`
    font-size: ${fontSize};
    display: flex;
  `;

  const doValidationStateSwitch = (validationState) => {
    let tempValidationStateStyle = void 0;
    switch (validationState) {
      case 'error':
        tempValidationStateStyle = css`color:${errorColor};`
        break;
      case 'success':
        tempValidationStateStyle = css`color:${successColor};`
        break;
      case 'warning':
        tempValidationStateStyle = css`color:${warningColor};`
        break;
      default:
        tempValidationStateStyle = disabled ? css `color:${disabledColor};` : css`color:${color};`
        break;
    }
    return tempValidationStateStyle;
  };
  const requiredIndicatorStyle = required ? css `
    &:after {
        content: attr(data-validation-required-state-indicator);
        padding-left: 3px;
    }
  ` : '';

  const attributes = {
      id,
      'className': `form-label ${thisClassName} ${labelStyle} ${doValidationStateSwitch(validationState)} ${requiredIndicatorStyle}`,
      'data-validation-state': validationState,
      'data-validation-required-state-indicator': validationRequiredStateIndicator,
      disabled,
      required
  };
  return (
    <label
      {...attributes}
    >
      {value && (
        <div className='form-label-value'>
          {value}
        </div>
      )}
    </label>
  );
};

Label.propTypes = {
  /**
   *  An optional classname to add to the component.
   */
  className: PropTypes.string,
  /**
   *  Indicates whether or not the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   *  The id used for the label element.
   */
  id: PropTypes.string,
  /**
   *  Indicates that the user must fill in a value for the input associated with this label.
   */
  required: PropTypes.bool,
  /**
   *  The value to display next to the label if the field is required.
   */
  validationRequiredStateIndicator: PropTypes.string,
  /**
   *  The validation state of the assocat
   */
  validationState: PropTypes.oneOf(['', 'error', 'success', 'warning']),
  value: PropTypes.string,
  color: PropTypes.string,
  errorColor: PropTypes.string,
  successColor: PropTypes.string,
  warningColor: PropTypes.string,
  disabledColor: PropTypes.string,
  fontSize: PropTypes.string
};

Label.defaultProps = {
  validationRequiredStateIndicator: '*'
};

export default Label;
