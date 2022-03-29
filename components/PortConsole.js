import styles from "../styles/PortConsole.module.css";
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

export default function PortConsole(props) {
  const iconRef = {
    html: <AiFillHtml5 />,
    css: <DiCss3 />,
    bootstrap: <BsFillBootstrapFill />,
    js: <IoLogoJavascript />,
    react: <GrReactjs />,
    next: <SiNextdotjs />,
    express: <SiExpress />,
    mongo: <SiMongodb />,
    vercel: <SiVercel />,
    heroku: <SiHeroku />,
    mailchimp: <SiMailchimp />,
  };
  return (
    <div className={styles.console}>
      <header>
        <p>#{props.num}</p>
      </header>
      <div className={styles.consoleBody}>
        <div className={styles.image}>
          <img src={props.imgSource} alt="Err" />
        </div>
        <h2>{props.name}</h2>
        {props.tools &&
          props.tools.map((tool) => (
            <span className="mx-1">{iconRef[tool]}</span>
          ))}
      </div>
      <p>{props.description}</p>
      <a target="_blank" href={props.source} rel="noreferrer">Go here</a>
    </div>
  );
}
