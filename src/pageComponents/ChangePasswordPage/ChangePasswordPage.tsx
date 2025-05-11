'use client';
import React from 'react';
import styles from './ChangePasswordPage.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputBase } from '@/components/ui/Inputs/InputBase/InputBase';
import { Button } from '@/components/ui/Buttons/Button/Button';

type FormType = {
  old: string;
  new: string;
  confirm_new: string;
};

const formValidation = {
  old: {
    required: 'Поле обязательно к заполнению',
  },
  new: {
    required: 'Поле обязательно к заполнению',
  },
  confirm_new: {
    required: 'Поле обязательно к заполнению',
  },
};

export const ChangePasswordPage = () => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      old: '',
      new: '',
      confirm_new: '',
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data, 'data');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <div className={styles.inputWrapper}>
        <InputBase
          placeholder='Старый пароль'
          error={errors.old?.message}
          {...register('old', formValidation.old)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <InputBase
          placeholder='Новый пароль'
          error={errors.new?.message}
          {...register('new', formValidation.new)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <InputBase
          placeholder='Подтвердить пароль'
          error={errors.confirm_new?.message}
          {...register('confirm_new', formValidation.confirm_new)}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button type='submit' variant='primary' disabled={!isValid} size='s'>
          Изменить
        </Button>
      </div>
    </form>
  );
};
