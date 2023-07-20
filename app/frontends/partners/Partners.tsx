import { ArrowButton, Container, Title } from '@/app/components';
import styles from './styles.module.scss';
import { partnersContent } from './constants';
import { PartnersCard } from './partners-card';
import { ARROW_POSITION } from '@/app/shared';
export function Partners() {
  return (
    <Container>
      <div className={styles.partners}>
        <Title title={partnersContent.title} />
        <div className={styles.wrapper}>
          <ArrowButton className={styles.arrow} />
          <div className={styles.card__wrapper}>
            {partnersContent.cardsContent.slice(0, 4).map((image, index) => {
              return <PartnersCard image={image.image} key={index} />;
            })}
          </div>
          <div className={styles.card__wrapper}>
            {partnersContent.cardsContent.slice(4, 8).map((image, index) => {
              return <PartnersCard image={image.image} key={index} />;
            })}
          </div>
          <ArrowButton
            className={styles.right__arrow}
            position={ARROW_POSITION.RIGHT}
          />
        </div>
      </div>
    </Container>
  );
}
