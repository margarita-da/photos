import React, { FC } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import {
  Typography,
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { VisibilityIconStyle, BoxStyle } from './style';

type Props = {
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, 'repeatPassword'>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
      >
    | undefined;
  name: string;
  errors?: FieldErrors;
  control?: Control<FieldValues, any>;
};

export const PasswordInput: FC<Props> = ({ label, name, errors, control }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Box mt={2} sx={BoxStyle}>
      {label && (
        <Typography gutterBottom={true} variant='caption'>
          {label}*
        </Typography>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <OutlinedInput
              size='small'
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              // sx={TextFieldStyle}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? (
                      <VisibilityOff sx={VisibilityIconStyle} />
                    ) : (
                      <Visibility sx={VisibilityIconStyle} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              {...field}
            />
          </>
        )}
      />
      {errors && errors[name]?.message && (
        <Typography variant={'h5'}>{`${errors[name]?.message}`}</Typography>
      )}
    </Box>
  );
};
