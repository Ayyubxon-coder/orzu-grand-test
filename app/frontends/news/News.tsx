import { ArrowButton, Container, Link, Title } from '@/app/components';

import styles from './styles.module.scss';
import { newsContent } from './constants';
import { NewsCard } from './news-card';

export function News() {
  return (
    <Container>
      <div className={styles.news}>
        <Title title={newsContent.title} />
        <div className={styles.cards}>
          <ArrowButton className={styles.arrow} />
          {newsContent.cardContent.map((card) => {
            return <NewsCard {...card} key={card.content} />;
          })}
          <ArrowButton
            className={`${styles.right__arrow}`}
            position={ARROW_POSITION.RIGHT}
          />
        </div>
        <div className={styles.link__wrapper}>
          {newsContent.links.map((el) => {
            return <Link title={el.content} key={el.content} />;
          })}
        </div>
      </div>
    </Container>
  );
}
