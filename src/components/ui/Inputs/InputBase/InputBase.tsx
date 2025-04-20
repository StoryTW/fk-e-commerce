import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

import styles from './InputBase.module.scss';
import { ValidationHint } from '../../ValidationHint/ValidationHint';

export interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: string;
}

export const InputBase = forwardRef<HTMLInputElement, IInput>(
  (
    { error, id, type, disabled, className, ...props },
    ref,
  ) => {
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <input
            ref={ref}
            id={id}
            type={type}
            className={clsx(className, {
              [styles.error]: error,
            })}
            disabled={disabled}
            {...props}
          />
        </div>
        <ValidationHint errorMsg={error ?? ''} />
      </div>
    );
  },
);

InputBase.displayName = 'InputBase';
