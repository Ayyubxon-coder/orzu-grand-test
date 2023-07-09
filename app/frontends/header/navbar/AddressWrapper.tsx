import { ReactNode } from 'react';
import styles from './styles.module.scss';
export type AddressWrapperType = {
  children: ReactNode;
};
export const AddressWrapper = ({ children }: AddressWrapperType) => {
  return <div className={styles.address}>{children}</div>;
};
