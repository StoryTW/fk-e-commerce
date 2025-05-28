import { InputBase } from '@/components/ui/Inputs/InputBase/InputBase';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './RegisterFrame.module.scss';
import { Button } from '@/components/ui/Buttons/Button/Button';
import { useSignUp } from '@/hooks/query/auth/useSignUp';
import { regExpHelper } from '@/utils/helpers/regExp.helper';
import { AuthFrameEnum } from '@/utils/helpers/enums';
import { toast } from 'react-toastify';

type FormType = {
  name: string;
  email: string;
  password: string;
};

const formValidation = {
  name: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('ONE_LETTER'),
      message: 'Имя должно содержать хотя бы одну букву',
    },
  },
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

export const RegisterFrame = ({ setAuthFrame }) => {
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

  const { mutate, isPending } = useSignUp({
    onSuccess: (data) => {
      if (data.message === 'success') {
        setAuthFrame(AuthFrameEnum.LOGIN);
        toast.success('Вы успешно зарегистрировались!');
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
    });
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

      <Button variant='primary' type='submit' disabled={!isValid || isPending} size='l'>
        Зарегистрироваться
      </Button>
    </form>
  );
};
