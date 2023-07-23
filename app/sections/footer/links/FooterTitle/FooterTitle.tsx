import styles from './styles.module.scss';
type FooterTitle = {
  title: string;
};
export function FooterTitle({ title }: FooterTitle) {
  return <h4 className={styles.title}>{title}</h4>;
}
