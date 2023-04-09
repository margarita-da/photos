/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect } from 'react';
import { Box, Typography, Button as ButtonLink } from '@mui/material';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Button, PasswordInput, TextInput } from 'shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from 'core/hooks/redux';
import { useSelector } from 'react-redux';

import { registration } from '../store/actions';
import { validationSchemaRegistration } from '../validationSchema';
import { linkContainer } from '../style/style';
import { getInputErrors } from '../store/selectors';

export const RegistrationContainer: FC = () => {
  const serverErrors = useSelector(getInputErrors);
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaRegistration),
  });
  const dispatch = useAppDispatch();

  const handleSubmitForm = (): void => {
    // dispatch(registrationExecutor(data));
  };

  useEffect(() => {
    if (serverErrors) {
      setError(serverErrors.name, {
        message: serverErrors.message,
      });
    }
  }, [serverErrors]);

  return (
    <>
      <Typography variant='h3' mb={'20px'}>
        {'Регистрация'}
      </Typography>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <TextInput
          label={'Имя'}
          name={'name'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
          required
        />

        <TextInput
          label={'Email'}
          name={'email'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
          required
        />
        <PasswordInput
          label={'Пароль'}
          name={'password'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
        />
        <PasswordInput
          label={'Введите новый пароль еще раз'}
          name={'repeatPassword'}
          control={control as unknown as Control<FieldValues, any>}
          errors={errors}
        />

        <Box sx={linkContainer}>
          <ButtonLink href='/auth'>{'Уже есть аккаунт?'}</ButtonLink>
        </Box>
        <Button type='submit' color='primary' name={'Зарегистрироваться'} />
      </form>
    </>
  );
};
