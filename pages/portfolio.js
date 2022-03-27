import { useRouter } from "next/router";
import styles from "../styles/Portfolio.module.css";
import Link from "next/link";
import PortConsole from "../components/PortConsole";

export default function portfolio() {
  const router = useRouter();

  return (
    <div className={styles.portfolio}>
      
      <h3>&#62; PORTFOLIO</h3>
      <h3>&#62; some of my projects</h3>
      <h3>&#62;</h3>
      <div className="link-area">
        <h3 className="main-link">
          &#62;{" "}
          <Link href={"/"}>
            <span>
              back<span className="blink-link">_</span>
            </span>
          </Link>
        </h3>
        <h3>
          &#62; <span className="blinker">_</span>
        </h3>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <PortConsole/>
        </div>
        <div className="col-lg-4">
          <PortConsole/>
        </div>
        <div className="col-lg-4">
          <PortConsole/>
        </div>
      </div>
    </div>
  );
}
