import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Button, PasswordInput } from 'shared';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchemaChangePass } from '../validationSchema';

export const ChangePasswordContainer: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaChangePass),
  });
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleClick = () => {};

  return (
    <>
      <Typography variant='h3' mb={'20px'}>
        {'Изменить пароль для входа в личный кабинет'}
      </Typography>
      <form onSubmit={handleSubmit(handleClick)}>
        <PasswordInput
          label={'Старый пароль'}
          name={'oldPassword'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
        />
        <PasswordInput
          label={'Новый пароль'}
          name={'newPassword'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
        />
        <PasswordInput
          label={'Введите новый пароль еще раз'}
          name={'repeatPassword'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
        />
        <Button type='submit' color='primary' name={'Обновить пароль'} />
        <Button variant='text' color='info' name={'Отмена'} />
      </form>
    </>
  );
};
