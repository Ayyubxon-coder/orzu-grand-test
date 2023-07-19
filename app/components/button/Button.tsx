import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export type ButtonPropsType = {
  title: string;
  size?: 'small' | 'default';
  color?: PRIMARY_COLORS.GREEN | PRIMARY_COLORS.BLUE;
} & HTMLAttributes<Partial<HTMLButtonElement>>;

export function Button({
  title,
  size = 'default',
  color = PRIMARY_COLORS.BLUE,
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
