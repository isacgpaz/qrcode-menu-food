import Head from 'next/head'

import Navbar from './../components/Navbar';
import Menu from './../components/Menu';
import Hero from './../components/Hero';
import WhatsAppButton from './../components/WhatsAppButton';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Head>
          <title>Menu Food</title>
        </Head>

        <Navbar />
        <Hero />
        <Menu />
        <WhatsAppButton />

      </main>
      <div className={styles.mediaMessage}>
        Não compatível com as dimensões de tela atuais.
      </div>
    </>
  )
};