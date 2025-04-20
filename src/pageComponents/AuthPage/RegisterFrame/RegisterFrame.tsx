import { InputBase } from '@/components/ui/Inputs/InputBase/InputBase';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './RegisterFrame.module.scss';
import { Button } from '@/components/ui/Buttons/Button/Button';

type FormType = {
  name: string;
  email: string;
  password: string;
};

const formValidation = {
  name: {
    required: 'Поле обязательно к заполнению',
  },
  email: {
    required: 'Поле обязательно к заполнению',
  },
  password: {
    required: 'Поле обязательно к заполнению',
  },
};

export const RegisterFrame = () => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data, 'dataRegister');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputBase
        id='name'
        autoComplete='off'
        type='text'
        placeholder='Имя'
        error={errors?.name?.message}
        {...register('name', formValidation.name)}
      />

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
        Зарегестрироваться
      </Button>
    </form>
  );
};
