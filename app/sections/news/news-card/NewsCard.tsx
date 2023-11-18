import Image, { StaticImageData } from 'next/image';
import { Button } from '@/app/components';

import styles from './styles.module.scss';
import { PRIMARY_COLOR_TYPE } from '@/app/shared';

type NewsCardPropsType = {
  image: StaticImageData;
  title: string;
  date: string;
  content: string;
  buttonColor: PRIMARY_COLOR_TYPE;
};

export function NewsCard({
  content,
  date,
  image,
  title,
  buttonColor,
}: NewsCardPropsType) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} />
      <h4>{title}</h4>
      <p>{date}</p>
      <span>{content}</span>
      <Button
        color={buttonColor}
        className={styles.button}
        title='Подробнее'
        size='small'
      />
    </div>
  );
}
