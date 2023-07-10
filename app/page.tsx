import styles from './page.module.css';
import { Header, Products, Services } from './frontends';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
      <Services />
    </main>
  );
}
