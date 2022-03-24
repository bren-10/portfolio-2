import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brendan Stander</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        {/* Are <li> list items outdated? Gonna give it a pass for now.*/}
        <h2>&#62; BRENDAN STANDER</h2>
        <h2>&#62; my clich&#233; portfolio website</h2>
        <h2>&#62;</h2>
        <div className='link-area'>
          <h2 className='main-link'>&#62; <Link href={'/portfolio'}><span>view portfolio<span className='blink-link'>_</span></span></Link></h2>
          <h2 className='main-link'>&#62; <Link href={'/about-me'}><span>about me<span className='blink-link'>_</span></span></Link></h2>
          <h2 className='main-link'>&#62; <Link href={'/tangents'}><span>tangents<span className='blink-link'>_</span></span></Link></h2>
          <h2 className='main-link'>&#62; <Link href={'/contact-me'}><span>contact me<span className='blink-link'>_</span></span></Link></h2>
          <h2>&#62; <span className='blinker'>_</span></h2>
        </div>
      </div>
    </div>
  )
}