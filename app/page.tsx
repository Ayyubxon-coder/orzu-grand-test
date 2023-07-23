'use client';
import { useState } from 'react';
import styles from './page.module.css';
import {
  AboutUs,
  Header,
  News,
  Products,
  Services,
  Partners,
  Footer,
  Sidebar,
} from './sections';

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const handleOpenSidebar = () => setOpenSidebar((prev) => !prev);
  return (
    <main className={styles.main}>
      {openSidebar ? <Sidebar handleOpenSidebar={handleOpenSidebar} /> : null}
      <Header handleOpenSidebar={handleOpenSidebar} />
      <Products />
      <Services />
      <AboutUs />
      <News />
      <Partners />
      <Footer />
    </main>
  );
}
