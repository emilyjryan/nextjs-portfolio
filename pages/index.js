import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Emily Ryan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Cabin&family=Josefin+Slab&family=Unbounded&display=swap" rel="stylesheet"></link> */}

      </Head>
      <main className={styles.main}>
        <h1>E M I L Y | R Y A N</h1>
        <h1>Software Engineer</h1>
      </main>
    </>
  )
}
