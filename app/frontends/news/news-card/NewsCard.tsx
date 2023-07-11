import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.scss';

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
    </div>
  );
}
