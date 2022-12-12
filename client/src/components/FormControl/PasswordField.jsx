import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormState } from "react-hook-form";

function PasswordField(props) {
  const { name, label, rules, ...restProps } = props;
  const formState = useFormState();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <FormControl
      error={Boolean(formState.errors && formState.errors[name])}
      fullWidth
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <Controller
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            error={Boolean(formState.errors && formState.errors[name])}
            {...restProps}
          />
        )}
      />
      <FormHelperText id="component-error-text">
        {formState.errors && formState.errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
