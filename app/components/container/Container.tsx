import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type ContainerType = {
  children: ReactNode;
  header?: boolean;
};
export function Container({ children, header }: ContainerType) {
  return (
    <div className={header ? styles.headerContainer : styles.container}>
      <div className={!header ? styles.child : ''}>{children}</div>
    </div>
  );
}
