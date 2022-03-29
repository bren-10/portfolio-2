import styles from '../styles/Contact.module.css'
import Link from 'next/link'

export default function contactMe() {
  return (
    <div className={styles.contact}>
      <h3>&#62; CONTACT ME</h3>
      <h3>&#62; form still to come</h3>
      <h3>&#62;</h3>
      <div className="link-area">
        <h3 className='main-link'>&#62; <a href='mailto:info@bren-10.co.za'><span>email<span className='blink-link'>_</span></span></a></h3>
        <h3 className='main-link'>&#62; <a href='tel:+27823896188'><span>call<span className='blink-link'>_</span></span></a></h3>
        <h3 className='main-link'>&#62; <a href='https://wa.me/+27823896188' target='_blank' rel="noreferrer"><span>whatsapp<span className='blink-link'>_</span></span></a></h3>
        <h3 className='main-link'>&#62; <Link passHref href={'/'}><span>back<span className='blink-link'>_</span></span></Link></h3>
        <h3>&#62; <span className='blinker'>_</span></h3>
      </div>
    </div>
  )
}
