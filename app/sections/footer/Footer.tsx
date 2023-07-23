import { Container, Title } from '@/app/components';
import styles from './styles.module.scss';
import { FooterContacts } from './contacts';
import { FooterLinks } from './links';
export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.sections__wrapper}>
          <FooterContacts />
          <FooterLinks />
        </div>
      </Container>
    </div>
  );
}
