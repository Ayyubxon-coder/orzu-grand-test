import styles from './styles.module.scss';
export type ButtonPropsType = {
  title: string;
};

export function Button({ title }: ButtonPropsType) {
  return (
    <button className={styles.button}>
      <span>{title}</span>
    </button>
  );
}
