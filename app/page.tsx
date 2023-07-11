import styles from './page.module.css';
import { AboutUs, Header, News, Products, Services } from './frontends';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
      <Services />
      <AboutUs />
      <News />
    </main>
  );
}
