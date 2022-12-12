import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormState } from "react-hook-form";

function InputField(props) {
  const { name, label, rules, variant = "outlined", ...restProps } = props;
  const formState = useFormState();
  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          error={Boolean(formState.errors && formState.errors[name])}
          helperText={formState.errors && formState.errors[name]?.message}
          label={label}
          variant={variant}
          {...restProps}
        />
      )}
      rules={rules}
    />
  );
}

export default InputField;
