import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type ContainerType = {
  children: ReactNode;
};
export function Container({ children }: ContainerType) {
  return <div className={styles.container}>{children}</div>;
}
