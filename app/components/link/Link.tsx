import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../public/icons/up-arrow (1) 1.svg';
import Image from 'next/image';
import { ArrowIcon } from '../../../public/icons/ArrowIcon';
import { PRIMARY_COLORS } from '@/app/shared';
export type LinkPropsType = {
  title: string;
  color?: PRIMARY_COLORS.GREEN | PRIMARY_COLORS.BLUE;
} & Partial<HTMLAttributes<HTMLDivElement>>;

export function Link({
  title,
  className,
  color = PRIMARY_COLORS.BLUE,
  ...props
}: LinkPropsType) {
  return (
    <div {...props} className={`${styles.link} ${className}`}>
      <p className={color === PRIMARY_COLORS.GREEN ? styles.green : ''}>
        {title}
      </p>
      <ArrowIcon color={color} />
    </div>
  );
}
