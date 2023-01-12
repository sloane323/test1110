import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
    <h1> Main Page 입니다 </h1>
    <Image src='next.svg'
    width={100}
    height={100} />
    <Link href='/about'> about으로 이동 </Link>
      </main>
    </>
  )
}
