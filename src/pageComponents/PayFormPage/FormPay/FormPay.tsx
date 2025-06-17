import React from 'react';
import styles from './FormPay.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { regExpHelper } from '@/utils/helpers/regExp.helper';
import { InputBase } from '@/components/ui/Inputs/InputBase/InputBase';
import { Button } from '@/components/ui/Buttons/Button/Button';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/utils/helpers/functions.helper';
import { useCreateInvoice } from '@/hooks/query/invoice/useCreateInvoice';

type FormType = {
  email: string;
  promocode: string;
};

const formValidation = {
  email: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('EMAIL'),
      message: 'Введите корректный email',
    },
  },
  promocode: {
    required: false,
  },
};

export const FormPay = () => {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      promocode: '',
    },
  });

  const sum = items.reduce((acc, item) => {
    return acc + (parseFloat(item.price) || 0);
  }, 0);

  const { mutate, isPending } = useCreateInvoice({
    onSuccess: (data) => {
      if (data.payment_url) {
        window.open(`${data.payment_url}`);
        clearCart();
      }
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    mutate({
      amount: String(sum),
      email: data.email,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputsWrapper}>
        <InputBase
          id='email'
          autoComplete='off'
          type='text'
          placeholder='Email'
          error={errors?.email?.message}
          {...register('email', formValidation.email)}
        />

        <InputBase
          id='promocode'
          autoComplete='off'
          type='text'
          placeholder='Промокод'
          error={errors?.promocode?.message}
          {...register('promocode', formValidation.promocode)}
        />
      </div>

      <div className={styles.payInfo}>
        <div className={styles.orderWrapper}>
          <div className={styles.orderText}>Количество товаров:</div>
          <div className={styles.orderValue}>
            <ol className={styles.list}>
              {items.map((item, index) => {
                return (
                  <li key={index} className={styles.listItem}>
                    {item.title}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.priceText}>Сумма заказа:</div>
          <div className={styles.priceValue}>{formatPrice(sum)}</div>
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <Button
          size='l'
          variant='primary'
          type='submit'
          className={styles.btn}
          isLoading={isPending}
          disabled={!items || !isValid}
        >
          Купить
        </Button>
      </div>

      <div className={styles.confirm_docs}>
        Нажимая кнопку пополнить, я принимаю условия Пользовательского Соглашения и подтверждаю
        ознакомление с FAQ
      </div>
    </form>
  );
};
