import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { PRIMARY_COLOR_TYPE } from '@/app/shared';

export type ButtonPropsType = {
  title: string;
  size?: 'small' | 'default';
  color?: PRIMARY_COLOR_TYPE.GREEN | PRIMARY_COLOR_TYPE.BLUE;
} & HTMLAttributes<Partial<HTMLButtonElement>>;

export function Button({
  title,
  size = 'default',
  color = PRIMARY_COLOR_TYPE.BLUE,
  ...props
}: ButtonPropsType) {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[size]} ${styles[color]} ${props.className}`}
    >
      <span className={`${styles.title} ${size && styles[size]}`}>{title}</span>
    </button>
  );
}
