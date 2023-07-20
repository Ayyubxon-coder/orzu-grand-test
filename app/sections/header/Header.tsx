import { Container } from '@/app/components';
import { Navbar } from './navbar';
import { HeaderMain } from './header-main';

import styles from './styles.module.scss';

export function Header() {
  return (
    <Container header={true}>
      <section className={styles.header}>
        <Navbar />
        <HeaderMain />
      </section>
    </Container>
  );
}
