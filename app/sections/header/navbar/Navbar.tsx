'use client';
import Image from 'next/image';

import { IconWrapper, AddressWrapper } from '@/app/components';

import { navbarContent } from '../constants';

import styles from './styles.module.scss';

import locationImage from '../../../../public/icons/maps-and-flags 1.svg';
import phoneImage from '../../../../public/icons/phone-call (1) 1.svg';
import logo from '../../../../public/icons/logo 1.png';
import magnifier from '../../../../public/icons/magnifier (1) 1.svg';
import facebookIcon from '../../../../public/icons/facebook-app-symbol 1.svg';
import russiaFlag from '../../../../public/icons/Flag_of_Russia 1.png';
import arrowDown from '../../../../public/icons/arrow-down-sign-to-navigate (3) 1.svg';
import navbarIcon from '../../../../public/icons/navigation-bar.png';

type NavbarPropsType = {
  handleOpenSidebar: () => void;
};

export function Navbar({ handleOpenSidebar }: NavbarPropsType) {
  return (
    <div className={styles.navbar}>
      <div className={styles.top}>
        <AddressWrapper text={navbarContent.address} icon={locationImage} />
        <AddressWrapper text={navbarContent.phoneNumber} icon={phoneImage} />

        <Image className={styles.logo} src={logo} alt='logo image' />
        <IconWrapper src={magnifier} alt='magnifier image' />
        <div className={styles.language}>
          <Image alt='facebook icon' src={facebookIcon} />
          <span>{navbarContent.facebookAddress}</span>
        </div>
        <div className={styles.language}>
          <Image
            style={{ borderRadius: '50%' }}
            alt='flag of russia government'
            src={russiaFlag}
          />
          <span>{navbarContent.language}</span>
          <Image alt='arrow down icon' src={arrowDown} />
        </div>
        <Image
          className={styles.nav__icon}
          src={navbarIcon}
          alt='navbar icon'
          onClick={handleOpenSidebar}
        />
      </div>
      <div className={styles.bottom}>
        {navbarContent.bottomContent.map((item) => {
          return (
            <div key={item}>
              <h3>{item}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
