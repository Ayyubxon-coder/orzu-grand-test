import styles from './styles.module.scss';
import ArrowImage from '../../../public/icons/arrow-down-sign-to-navigate (3) 1 (1).svg';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { ARROW_POSITION } from '@/app/shared';

type ArrowButtonPropsType = {
  position?: ARROW_POSITION.LEFT | ARROW_POSITION.RIGHT;
} & Partial<HTMLAttributes<HTMLButtonElement>>;

export function ArrowButton({
  position = ARROW_POSITION.LEFT,
  ...props
}: ArrowButtonPropsType) {
  return (
    <button {...props} className={`${styles.wrapper} ${props.className}`}>
      <Image src={ArrowImage} alt='arrow icon' className={styles[position]} />
    </button>
  );
}
