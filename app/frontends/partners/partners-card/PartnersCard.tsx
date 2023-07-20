import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';
import { HTMLAttributes } from 'react';

type PartnersCardPropsType = {
  image: StaticImageData;
} & Partial<HTMLAttributes<HTMLDivElement>>;
export function PartnersCard({ image, ...props }: PartnersCardPropsType) {
  return (
    <div className={`${styles.wrapper} ${props.className}`}>
      <Image quality={100} src={image} alt={image.src} />
    </div>
  );
}
