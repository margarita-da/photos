import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Button, TextInput } from 'shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { validationSchemaRecoveryPass } from '../validationSchema';

export const RecoveryPasswordContainer: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaRecoveryPass),
  });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/auth`);
  };

  return (
    <>
      <Typography variant='h3' mb={'20px'}>
        {'Восстановления пароля личного кабинета'}
      </Typography>
      <form onSubmit={handleSubmit(handleClick)}>
        <TextInput
          label={'Email'}
          name={'email'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
          required
        />
        <Button type='submit' color='primary' name={'Восстановить пароль'} />
      </form>
    </>
  );
};
