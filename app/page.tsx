import styles from './page.module.css';
import {
  AboutUs,
  Header,
  News,
  Products,
  Services,
  Partners,
} from './frontends';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
      <Services />
      <AboutUs />
      <News />
      <Partners />
    </main>
  );
}
