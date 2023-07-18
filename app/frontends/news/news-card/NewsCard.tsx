import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.scss';
import { Button } from '@/app/components';

type NewsCardPropsType = {
  image: StaticImageData;
  title: string;
  date: string;
  content: string;
};

export function NewsCard({ content, date, image, title }: NewsCardPropsType) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} />
      <h4>{title}</h4>
      <p>{date}</p>
      <span>{content}</span>
      <Button className={styles.button} title='Подробнее' size='small' />
    </div>
  );
}
