import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <Head>
      <title>Ninja List | Home </title>
      <meta name="keywords" content="ninjas" />
     </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Eu amet nostrud quis veniam excepteur dolore ullamco ut nostrud id ut.</p>
        <p className={styles.text}>Exercitation culpa do est incididunt tempor sit sunt irure veniam irure.</p>
        <p className={styles.text}>Amet sunt aliqua mollit exercitation ipsum.</p>
        <Link href="/ninjas">
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>
        <br />
      </div>
    </>
  )
}
