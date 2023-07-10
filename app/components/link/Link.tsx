import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../public/icons/up-arrow (1) 1.svg';
import Image from 'next/image';
export type LinkPropsType = {
  title: string;
} & Partial<HTMLAttributes<HTMLDivElement>>;

export function Link({ title, className, ...props }: LinkPropsType) {
  return (
    <div {...props} className={`${styles.link} ${className}`}>
      <p>{title}</p>
      <Image src={arrow} alt='arrow icon' />
    </div>
  );
}
