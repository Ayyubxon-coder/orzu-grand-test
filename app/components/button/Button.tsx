import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
export type ButtonPropsType = {
  title: string;
  size?: 'small' | 'default';
} & HTMLAttributes<Partial<HTMLButtonElement>>;

export function Button({ title, size = 'default', ...props }: ButtonPropsType) {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[size]} ${props.className}`}
    >
      <span className={`${styles.title} ${size && styles[size]}`}>{title}</span>
    </button>
  );
}
