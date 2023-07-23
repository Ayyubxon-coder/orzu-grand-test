import { navbarContent } from '../constants';
import styles from './styles.module.scss';

type SidebarPropsType = {
  handleOpenSidebar: () => void;
};
export function Sidebar({ handleOpenSidebar }: SidebarPropsType) {
  return (
    <div onClick={handleOpenSidebar} className={styles.main}>
      <div className={styles.wrapper}>
        {navbarContent.bottomContent.map((item) => {
          return <h3 key={item}>{item}</h3>;
        })}
      </div>
    </div>
  );
}
