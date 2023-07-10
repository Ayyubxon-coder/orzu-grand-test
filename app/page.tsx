import styles from './page.module.css';
import { AboutUs, Header, Products, Services } from './frontends';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
      <Services />
      <AboutUs />
    </main>
  );
}
