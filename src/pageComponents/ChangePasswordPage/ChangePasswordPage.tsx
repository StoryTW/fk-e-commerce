'use client';
import React from 'react';
import styles from './ChangePasswordPage.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputBase } from '@/components/ui/Inputs/InputBase/InputBase';
import { Button } from '@/components/ui/Buttons/Button/Button';
import { useChangePassword } from '@/hooks/query/auth/useChangePassword';
import { toast } from 'react-toastify';

type FormType = {
  old: string;
  new: string;
  confirm_new: string;
};

export const ChangePasswordPage = () => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      old: '',
      new: '',
      confirm_new: '',
    },
  });

  const oldPassword = watch('old');
  const newPassword = watch('new');

  const { mutate, isPending } = useChangePassword({
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
    onError: () => {
      toast.error('Ошибка! Проверьте корректность данных');
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    mutate({
      old_password: data.old,
      new_password: data.new,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <div className={styles.inputWrapper}>
        <InputBase
          placeholder='Старый пароль'
          error={errors.old?.message}
          {...register('old', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Пароль должен быть не менее 8 символов',
            },
          })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <InputBase
          placeholder='Новый пароль'
          error={errors.new?.message}
          {...register('new', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Пароль должен быть не менее 8 символов',
            },
            validate: (value) =>
              value !== oldPassword || 'Новый пароль не должен совпадать со старым',
          })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <InputBase
          placeholder='Подтвердить пароль'
          error={errors.confirm_new?.message}
          {...register('confirm_new', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Пароль должен быть не менее 8 символов',
            },
            validate: (value) => value === newPassword || 'Пароли не совпадают',
          })}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button type='submit' variant='primary' disabled={!isValid || isPending} size='s'>
          Изменить
        </Button>
      </div>
    </form>
  );
};
