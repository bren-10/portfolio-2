import styles from '../styles/Tangents.module.css'
import Link from 'next/link'

export default function tangents() {
  return (
    <div className={styles.tangents}>
      <h3>&#62; TANGENTS</h3>
      <h3>&#62; for the sake of having a backend</h3>
      <h3>&#62;</h3>
      <div className="link-area">
        <h3 className='main-link'>&#62; <Link href={'/'}><span>back<span className='blink-link'>_</span></span></Link></h3>
        <h3>&#62; <span className='blinker'>_</span></h3>
      </div>
    </div>
  )
}
