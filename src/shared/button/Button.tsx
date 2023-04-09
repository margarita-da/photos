import React, { FC, FormEventHandler } from 'react';
import { Button as MuiButton } from '@mui/material';

import { ButtonStyle } from './style';

type Props = {
  name: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'inherit'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  onChange?: FormEventHandler<HTMLButtonElement>;
};

export const Button: FC<Props> = ({ name, color, variant, type, onChange }) => {
  return (
    <MuiButton
      variant={variant ? variant : 'contained'}
      color={color}
      sx={ButtonStyle}
      type={type}
      onChange={onChange}
    >
      {name}
    </MuiButton>
  );
};
