import { Button, Container, Title } from '@/app/components';
import logo from '../../../public/icons/logo 1.png';
import bigEllipse from '../../../public/icons/Ellipse 4.svg';
import mediumEllipse from '../../../public/icons/Ellipse 5.svg';
import smallEllipse from '../../../public/icons/Ellipse 6.svg';

import styles from './styles.module.scss';
import { aboutUsContent } from './constants';
import Image from 'next/image';

export function AboutUs() {
  return (
    <Container>
      <div className={styles.about}>
        <Title title={aboutUsContent.title} />
        <div className={styles.wrapper}>
          <div className={styles.logo__wrapper}>
            <Image className={styles.big__circle} src={bigEllipse} alt='bla' />
            <Image
              className={styles.medium__circle}
              src={mediumEllipse}
              alt='bla'
            />
            <Image
              className={styles.small__circle}
              src={smallEllipse}
              alt='bla'
            />
            <Image className={styles.logo} src={logo} alt='logo image' />
          </div>
          <div className={styles.content}>
            <p>{aboutUsContent.content}</p>
            <Button
              className={styles.button}
              title={aboutUsContent.buttonContent}
              size='small'
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
