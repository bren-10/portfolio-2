import { useRouter } from "next/router";
import styles from "../styles/Portfolio.module.css";
import Link from 'next/link'

export default function portfolio() {
  const router = useRouter()
  
  return (
    <div className={styles.portfolio}>
  
      <h2>&#62; PORTFOLIO</h2>
      <h2>&#62; some of my projects</h2>
      <h2>&#62;</h2>
      <div className="link-area">
        <h2 className='main-link'>&#62; <Link href={'/'}><span>back<span className='blink-link'>_</span></span></Link></h2>
        <h2>&#62; <span className='blinker'>_</span></h2>
      </div>
    </div>
  );
}
