import { InputBase } from '@/components/ui/Inputs/InputBase/InputBase';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './LoginFrame.module.scss';
import { Button } from '@/components/ui/Buttons/Button/Button';
import { regExpHelper } from '@/utils/helpers/regExp.helper';
import { useSignIn } from '@/hooks/query/auth/useSignIn';
import { toast } from 'react-toastify';
import { setToken } from '@/utils/token';
import { WHEEL_STORAGE } from '@/utils/constants';
import Cookies from 'js-cookie';

type FormType = {
  email: string;
  password: string;
};

const formValidation = {
  email: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('EMAIL'),
      message: 'Введите корректный email',
    },
  },
  password: {
    required: 'Поле обязательно к заполнению',
    minLength: {
      value: 8,
      message: 'Пароль должен быть не менее 8 символов',
    },
  },
};

export const LoginFrame = () => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useSignIn({
    onSuccess: (data) => {
      if (data.access_token) {
        setToken(data.access_token);
        Cookies.set(WHEEL_STORAGE, '1', { expires: 1 });

        window.location.href = 'http://localhost:3000'
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputBase
        id='email'
        autoComplete='off'
        type='text'
        placeholder='Email'
        error={errors?.email?.message}
        {...register('email', formValidation.email)}
      />

      <InputBase
        id='password'
        autoComplete='off'
        type='text'
        placeholder='Пароль'
        error={errors?.password?.message}
        {...register('password', formValidation.password)}
      />

      <Button variant='primary' size='l' type='submit' disabled={!isValid || isPending}>
        Войти
      </Button>
    </form>
  );
};
