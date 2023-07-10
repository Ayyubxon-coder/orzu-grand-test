import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';
import { Button } from '@/app/components';

type ServicesCardPropsType = {
  image: StaticImageData;
  content: string;
  title: string;
};
export function ServicesCard({ content, image, title }: ServicesCardPropsType) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} />
      <p>{title}</p>
      <span>{content}</span>
      <Button title='Подробнее' />
    </div>
  );
}
