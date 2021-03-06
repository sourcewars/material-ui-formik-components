import React from 'react'
import PropTypes from 'prop-types'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

class FRadioGroup extends React.PureComponent {
  render() {
    const {
      label,
      field,
      form: { touched, errors, values, setFieldValue },
      options,
      required,
      fullWidth,
      margin,
      classes: {
        formControl,
        formLabel,
        radioGroup,
        formControlLabel,
        radio,
        formHelperText,
      },
      ...other
    } = this.props
    const errorText = errors[field.name]
    const hasError = touched[field.name] && errorText !== undefined
    return (
      <FormControl
        component="fieldset"
        fullWidth={fullWidth}
        margin={margin}
        required={required}
        error={hasError}
        className={formControl}
        {...other}
      >
        <FormLabel className={formLabel}>{label}</FormLabel>
        <RadioGroup
          aria-label={label}
          name={field.name}
          value={values[field.name]}
          onChange={event => setFieldValue(field.name, event.target.value)}
          className={radioGroup}
        >
          {options.map(item => (
            <FormControlLabel
              key={`${item.label}_${item.value}`}
              value={item.value}
              control={<Radio className={radio} />}
              label={item.label}
              className={formControlLabel}
            />
          ))}
        </RadioGroup>
        {hasError && (
          <FormHelperText className={formHelperText}>
            {errorText}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

FRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    values: PropTypes.object,
    setFieldValue: PropTypes.func,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  classes: PropTypes.shape({
    formControl: PropTypes.string,
    formLabel: PropTypes.string,
    radioGroup: PropTypes.string,
    formControlLabel: PropTypes.string,
    radio: PropTypes.string,
    formHelperText: PropTypes.string,
  }),
}

FRadioGroup.defaultProps = {
  required: false,
  fullWidth: true,
  margin: 'normal',
  classes: undefined,
}

export default FRadioGroup
