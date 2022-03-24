import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function aboutMe() {
  return (
    <div className={styles.about}>
      <h2>&#62; ABOUT ME</h2>
      <h2>&#62; basic information about me</h2>
      <h2>&#62;</h2>
      <div className="link-area">
        <h2 className='main-link'>&#62; <a href={'/cv.pdf'} target='_blank'><span>view CV<span className='blink-link'>_</span></span></a></h2>
        <h2 className='main-link'>&#62; <Link href={'/'}><span>back<span className='blink-link'>_</span></span></Link></h2>
        <h2>&#62; <span className='blinker'>_</span></h2>
      </div>
    </div>
  )
}
