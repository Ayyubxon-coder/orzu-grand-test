import styles from './styles.module.scss';
export type TitlePropsType = {
  title: string;
};
export function Title({ title }: TitlePropsType) {
  return <h2 className={styles.title}>{title}</h2>;
}
