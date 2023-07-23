import Image from 'next/image';
import { AddressWrapper, Button } from '@/app/components';
import { footerContactsContent } from './constants';
import styles from './styles.module.scss';
import { navbarContent } from '../../header/constants';

import locationImage from '../../../../public/icons/maps-and-flags 1.svg';
import phoneImage from '../../../../public/icons/phone-call (1) 1.svg';
import emailImage from '../../../../public/icons/email 1.svg';
import logo from '../../../../public/icons/logo 1.png';

export function FooterContacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.addresses}>
        <div className={styles.addresses__items}>
          <h3>{footerContactsContent.title}</h3>
          <AddressWrapper text={navbarContent.address} icon={locationImage} />
          <AddressWrapper text={navbarContent.phoneNumber} icon={phoneImage} />
        </div>
        <div className={styles.addresses__items}>
          <div className={styles.space}></div>
          <AddressWrapper
            className={styles.email}
            text={navbarContent.email}
            icon={emailImage}
          />
          <Button
            size='small'
            title={footerContactsContent.addressButtonTitle}
            className={styles.button}
          />
        </div>
      </div>
      <div className={styles.content}>
        <Image className={styles.logo} src={logo} alt='logo image' />
        <p>{footerContactsContent.content}</p>
      </div>
    </div>
  );
}
