import { Container, Title } from '@/app/components';

import styles from './styles.module.scss';
import { newsContent } from './constants';
import { NewsCard } from './news-card';

export function News() {
  return (
    <Container>
      <div className={styles.news}>
        <Title title={newsContent.title} />
        <div className={styles.cards}>
          {newsContent.cardContent.map((card) => {
            return <NewsCard {...card} key={card.content} />;
          })}
        </div>
      </div>
    </Container>
  );
}
