import { Button, Container, Title } from '@/app/components';

import styles from './styles.module.scss';
import { aboutUsContent } from './constants';

export function AboutUs() {
  return (
    <Container>
      <div className={styles.about}>
        <Title title={aboutUsContent.title} />
        <div className={styles.content}>
          <p>{aboutUsContent.content}</p>
          <Button
            className={styles.button}
            title={aboutUsContent.buttonContent}
            size='small'
          />
        </div>
      </div>
    </Container>
  );
}
