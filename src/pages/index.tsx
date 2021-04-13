import Head from 'next/head'

import Navbar from './../components/Navbar';
import Menu from './../components/Menu';

import styles from '../styles/pages/Home.module.css';
import { WhatsAppButton } from './../components/WhatsAppButton';

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Menu Food</title>
      </Head>

      <Navbar />
      <Menu />
      <WhatsAppButton />
    </main>
  )
};