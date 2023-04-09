import React, { FC, FormEventHandler } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { LoaderStyle } from './style';

type Props = {
  color?:
    | 'primary'
    | 'secondary'
    | 'inherit'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  onClick?: FormEventHandler<HTMLElement> | undefined;
};

export const Loader: FC<Props> = ({ color, onClick }) => {
  return (
    <Backdrop
        sx={ LoaderStyle }
        open={true}
        onClick={onClick}
   >
    <CircularProgress color={color} />
  </Backdrop>
  );
};