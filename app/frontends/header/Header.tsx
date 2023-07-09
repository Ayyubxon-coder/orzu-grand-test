import { Container } from '@/app/components';
import { Navbar } from './navbar';
import styles from './styles.module.scss';

export function Header() {
  return (
    <Container>
      <section className={styles.header}>
        <Navbar />
      </section>
    </Container>
  );
}
