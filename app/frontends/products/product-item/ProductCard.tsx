import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';
import { Button } from '@/app/components';

export type ProductCardPropsType = {
  content: string;
  image: StaticImageData;
};

export function ProductCard({ content, image }: ProductCardPropsType) {
  return (
    <div className={styles.product}>
      <Image src={image} alt={content} />
      <p>{content}</p>
      <Button title='Посмотреть все' />
    </div>
  );
}
