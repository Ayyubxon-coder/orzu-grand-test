import { Container } from '@/app/components';
import { Navbar } from './navbar';
import { HeaderMain } from './header-main';

import styles from './styles.module.scss';

type HeaderPropsType = {
  handleOpenSidebar: () => void;
};

export function Header({ handleOpenSidebar }: HeaderPropsType) {
  return (
    <Container header={true}>
      <section className={styles.header}>
        <Navbar handleOpenSidebar={handleOpenSidebar} />
        <HeaderMain />
      </section>
    </Container>
  );
}
