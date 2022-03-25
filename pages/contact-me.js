import styles from '../styles/Contact.module.css'
import Link from 'next/link'

export default function contactMe() {
  return (
    <div className={styles.contact}>
      <h2>&#62; CONTACT ME</h2>
      <h2>&#62; form still to come</h2>
      <h2>&#62;</h2>
      <div className="link-area">
        <h2 className='main-link'>&#62; <a href='mailto:info@bren-10.co.za'><span>email<span className='blink-link'>_</span></span></a></h2>
        <h2 className='main-link'>&#62; <a href='tel:+27823896188'><span>call<span className='blink-link'>_</span></span></a></h2>
        <h2 className='main-link'>&#62; <a href='https://wa.me/+27823896188' target='_blank'><span>whatsapp<span className='blink-link'>_</span></span></a></h2>
        <h2 className='main-link'>&#62; <Link href={'/'}><span>back<span className='blink-link'>_</span></span></Link></h2>
        <h2>&#62; <span className='blinker'>_</span></h2>
      </div>
    </div>
  )
}
