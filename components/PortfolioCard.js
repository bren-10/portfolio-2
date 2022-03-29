import styles from "../styles/PortfolioCard.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiHeroku,
  SiMailchimp
} from "react-icons/si";

export default function PortfolioCard(props) {

  const iconRef = {
    html: <AiFillHtml5 className={styles.ico} data-toggle="tooltip" title="HTML"/>,
    css: <DiCss3 className={styles.ico} data-toggle="tooltip" title="CSS"/>,
    bootstrap: <BsFillBootstrapFill className={styles.ico} data-toggle="tooltip" title="Bootstrap"/>,
    js: <IoLogoJavascript className={styles.ico} data-toggle="tooltip" title="JavaScript"/>,
    react: <GrReactjs className={styles.ico} data-toggle="tooltip" title="ReactJS"/>,
    next: <SiNextdotjs className={styles.ico} data-toggle="tooltip" title="NextJS"/>,
    express: <SiExpress className={styles.ico} data-toggle="tooltip" title="ExpressJS"/>,
    mongo: <SiMongodb className={styles.ico} data-toggle="tooltip" title="MongoDB"/>,
    vercel: <SiVercel className={styles.ico} data-toggle="tooltip" title="Vercel"/>,
    heroku: <SiHeroku className={styles.ico} data-toggle="tooltip" title="Heroku"/>,
    mailchimp: <SiMailchimp className={styles.ico} data-toggle="tooltip" title="Mailchimp"/>,
  };
  return (
    <div className={styles.portCard}>
      <p>#{props.num}</p>
      <a href={props.source} target="_blank" rel="noreferrer">
        <img className={styles.image} src={props.imgSource} alt="Err" />
      </a>
      <h4>{props.name}</h4>
      <hr/>
      {props.tools &&
        props.tools.map((tool) => (
          <span className="mx-1">{iconRef[tool]}</span>
        ))}
      <p className="mt-2">{props.description}</p>
      <a target="_blank" href={props.sourceCode} rel="noreferrer" className={styles.viewCode}>Source Code</a>
    </div>
  );
}
