import Image from 'next/image';
import { Button, Container } from '@/app/components';
import { headerMainContent } from '../constants';

import styles from './styles.module.scss';
import machineImage from '../../../../public/icons/slide.png';
export function HeaderMain() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>{headerMainContent.headerProductName}</h1>
          <p>{headerMainContent.headerSubContent}</p>
          <Button title={headerMainContent.headerButton} />
        </div>
        <div className={styles.right}>
          <Image src={machineImage} alt='machine image' />
        </div>
      </div>
    </Container>
  );
}
