import { FC, PropsWithChildren } from 'react';
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";
import Head from 'next/head'


export const MainLayout:  FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Home - Martincho</title>
            <meta name='description' content='Home Page' />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
					{ children }
        </main>
    </div>
  )
}
