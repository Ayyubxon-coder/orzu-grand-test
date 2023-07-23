import styles from './styles.module.scss';

export enum LINK_TYPE {
  DEFAULT = 'default',
  SELECTED = 'selected',
}

type FooterLinkType = {
  link: string;
  type?: LINK_TYPE.DEFAULT | LINK_TYPE.SELECTED;
};

export function FooterLink({ link, type = LINK_TYPE.DEFAULT }: FooterLinkType) {
  return <span className={`${styles.link} ${styles[type]}`}>{link}</span>;
}
