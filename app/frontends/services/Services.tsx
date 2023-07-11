import { Container } from '@/app/components';

import styles from './styles.module.scss';
import { ServicesCard } from './services-card';
import { servicesContent } from './constants';

export function Services() {
  return (
    <div className={styles.services}>
      <Container>
        <div className={styles.wrapper}>
          {servicesContent.map((card) => {
            return <ServicesCard {...card} key={card.title} />;
          })}
        </div>
      </Container>
    </div>
  );
}
