import styles from "../styles/Portfolio.module.css";
import Link from "next/link";
import PortConsole from "../components/PortConsole";
import portfolioData from '../portfolioData.json'

export default function portfolio() {
  const data = portfolioData.portfolioData
  return (
    <div className={styles.portfolio}>
      
      <h3>&#62; PORTFOLIO</h3>
      <h3>&#62; some of my projects</h3>
      <h3>&#62;</h3>
      <div className="link-area">
        <h3 className="main-link">
          &#62;{" "}
          <Link passHref href={"/"}>
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
        {data.map((item,i)=> (
          <div className="col-lg" key={i}>
            <PortConsole 
              num={i}
              name={item.name}
              description={item.description}
              source={item.source}
              imgSource={item.imgSource}
              tools={item.tools}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
