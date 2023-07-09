import Image from 'next/image';
import { ImageProps } from 'next/image';

import styles from './styles.module.scss';

export function IconWrapper({ ...rest }: ImageProps) {
  return (
    <div className={styles.wrapper}>
      <Image {...rest} />
    </div>
  );
}
