import React, { FC } from 'react';
import { Controller, FieldErrors, FieldValues, Control } from 'react-hook-form';
import { Typography, Box, OutlinedInput } from '@mui/material';

type Props = {
  label?: string;
  name: string;
  errors?: FieldErrors;
  control?: Control<FieldValues, any>;
  color?: string;
  required?: boolean;
  defaultValue?: string | null | undefined;
  disabled?: boolean;
};

export const TextInput: FC<Props> = ({
  label,
  name,
  errors,
  control,
  color,
  required,
  defaultValue,
  disabled
}) => {
  return (
    <Box mt={2}>
      {label && (
        <Typography color={color} gutterBottom={true} variant='caption'>
          {label}
          {required ? '*' : ''}
        </Typography>
      )}

      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <OutlinedInput
              size='small'
              id='outlined-adornment-password'
              type={'text'}
              disabled={disabled}
              fullWidth
              {...field}
            />
          </>
        )}
      />
      {errors && errors[name]?.message && (
        <Typography
          color={color}
          variant={'h5'}
        >{`${errors[name]?.message}`}</Typography>
      )}
    </Box>
  );
};
