import styles from '../styles/Tangents.module.css'
import Link from 'next/link'

export default function tangents() {
  return (
    <div className={styles.tangents}>
      <h2>&#62; TANGENTS</h2>
      <h2>&#62; for the sake of having a backend</h2>
      <h2>&#62;</h2>
      <div className="link-area">
        <h2 className='main-link'>&#62; <Link href={'/'}><span>back<span className='blink-link'>_</span></span></Link></h2>
        <h2>&#62; <span className='blinker'>_</span></h2>
      </div>
    </div>
  )
}
