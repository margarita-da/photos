import React, { FC } from 'react';
import { Typography, Box, Button as ButtonLink } from '@mui/material';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Button, PasswordInput, TextInput } from 'shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from 'core/hooks/redux';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/loader';

import { validationSchemaAuth } from '../validationSchema';
import { linkContainer } from '../style/style';
import { login } from '../store/actions';
import { getInputErrors, getIsLoading } from '../store/selectors';

export const AuthorizationContainer: FC = () => {
  const serverErrors = useSelector(getInputErrors);
  const isLoading = useSelector(getIsLoading);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaAuth),
  });
  const dispatch = useAppDispatch();

  const handleSubmitForm = (data: any): void => {
    // dispatch(login(data));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Typography variant='h3' mb={'20px'}>
        {'Вход в личный кабинет'}
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <TextInput
          label={'Email'}
          name={'username'}
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
        {serverErrors && (
          <Typography variant={'h5'}>{serverErrors.message}</Typography>
        )}
        <Button type={'submit'} color='primary' name={'Войти'} />
      </form>
      <Box sx={linkContainer}>
        <ButtonLink href='/registration'>
          {'Нет аккаунта? Зарегистрироваться'}
        </ButtonLink>
      </Box>

      <Box sx={linkContainer}>
        <ButtonLink href='/recovery-password'>{'Забыли пароль?'}</ButtonLink>
      </Box>
    </>
  );
};
