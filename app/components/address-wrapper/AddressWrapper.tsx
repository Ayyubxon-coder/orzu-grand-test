import styles from './styles.module.scss';
import { IconWrapper } from '@/app/components';
import { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';
export type AddressWrapperType = {
  icon: StaticImageData;
  text: string;
} & Partial<HTMLAttributes<HTMLDivElement>>;
export const AddressWrapper = ({
  text,
  icon,
  ...props
}: AddressWrapperType) => {
  return (
    <div className={`${styles.address} ${props.className}`}>
      <IconWrapper alt='location image' src={icon} width={25} />
      <div className={styles.textWrapper}>
        <p>{text}</p>
      </div>
    </div>
  );
};
