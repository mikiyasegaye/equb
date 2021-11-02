import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import Box from "@mui/material/Box";

const CurrencyFormatCustom = forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="ETB "
    />
  );
});

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export function Currency(props) {
  const { name, label, value, error = null, onChange, ...other } = props;

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <TextField
        variant="outlined"
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        InputProps={{
          inputComponent: CurrencyFormatCustom,
        }}
        {...other}
        {...(error && { error: true, helperText: error })}
      />
    </Box>
  );
}

export function Number(props) {
  const { name, label, value, error = null, onChange, ...other } = props;

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <TextField
        variant="outlined"
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        {...other}
        {...(error && { error: true, helperText: error })}
      />
    </Box>
  );
}
