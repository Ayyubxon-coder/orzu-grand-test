import styles from './page.module.css';
import {
  AboutUs,
  Header,
  News,
  Products,
  Services,
  Partners,
  Footer,
} from './sections';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
      <Services />
      <AboutUs />
      <News />
      <Partners />
      <Footer />
    </main>
  );
}
