import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

import styles from './Button.module.scss';
import { Spinner } from '../../Spinner/Spinner';

export type ButtonVariants = 'primary';

// export type ButtonSize = 's' | 'l';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  // size: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  type?: HTMLButtonElement['type'];
}
export const Button = forwardRef(
  (
    {
      variant = 'primary',
      // size = 'l',
      isLoading,
      type = 'button',
      className,
      children,
      disabled,
      fullWidth = false,
      ...props
    }: IButton,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[variant],
          // styles[size],
          className,
          {
            [styles.fullWidth]: fullWidth,
            [styles.isLoading]: isLoading,
          },
        )}
        type={type}
        disabled={disabled || isLoading}
        {...props}
      >
        {!isLoading ? <>{children}</> : <Spinner />}
      </button>
    );
  },
);

Button.displayName = 'button';
