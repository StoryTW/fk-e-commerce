import { InputBase } from '@/components/ui/Inputs/InputBase/InputBase';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './LoginFrame.module.scss';
import { Button } from '@/components/ui/Buttons/Button/Button';

type FormType = {
  email: string;
  password: string;
};

const formValidation = {
  email: {
    required: 'Поле обязательно к заполнению',
  },
  password: {
    required: 'Поле обязательно к заполнению',
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

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data, 'dataLogin');
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

      <Button variant='primary' type='submit' disabled={isValid}>
        Войти
      </Button>
    </form>
  );
};

