import styles from "../styles/Portfolio.module.css";
import Link from "next/link";
import PortfolioCard from "../components/PortfolioCard";
import portfolioData from '../portfolioData.json'
import { useCallback, useRef, useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function portfolio() {
  const data = portfolioData.portfolioData
  const [terminalInput, setTerminalInput] = useState('')
  const [displayError, setDisplayError] = useState(false)
  const [projectsType, setProjectsType] = useState('personal')
  const router = useRouter()
  const inputRef = useRef()
  
  // Source: https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it
  // With added functionality
  // Decided to go the route of window keystore detection instead of <input/> because of fancy blinker cursor not working well
  // with the input field.
  const keystrokeDetection = useCallback((event) => {
    event.preventDefault()
    const key = event.key
    const ignoreList = ['Shift', 'Control', 'Alt', 'Escape', 'Tab', 'Home', 'Delete', 'End', 'Meta', 'CapsLock']

    function handleInput() {
      if (!ignoreList.includes(key)) {
        setTerminalInput(prev => prev.concat(key))
      }
    }

    function handleSubmission() {
      setDisplayError(false)
      const input = inputRef.current.toLowerCase()
      if (input === 'back') {
        router.back()
      } else if (input.includes('personal')) {
        setProjectsType('personal')
      } else if (input.includes('work')) {
        setProjectsType('work')
      } else {
        setDisplayError(true)
      }
    }

    // For the sake of speed-typers, I'd rather do switch/case
    switch (key) {
      case 'Enter':
        handleSubmission()
        break
      case 'Backspace':
        setTerminalInput(prev => prev.slice(0, -1))
        break
      case 'Space':
        setTerminalInput(prev => prev.concat(' '))
        break
      default:
        handleInput()
    }
  }, []);

  function switchProjects() {
    if (projectsType === 'personal') {
      setProjectsType('work')
      return
    }
    setProjectsType('personal')
    return
  }

  useEffect(() => {
    document.addEventListener("keydown", keystrokeDetection, false);

    return () => {
      document.removeEventListener("keydown", keystrokeDetection, false);
    };
  }, []);

  useEffect(() => {
    if (displayError && !terminalInput){
      setDisplayError(false)
    }
    inputRef.current = terminalInput
  }, [terminalInput])

  return (
    <div className={styles.portfolio}>
      
      <h3>&#62; PORTFOLIO</h3>
      <h3>&#62; =========</h3>
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
        <h3 onClick={switchProjects} className="main-link">
          &#62; {projectsType === 'personal' ? 'work' : 'personal'} projects<span className="blink-link">_</span>
        </h3>
        {displayError &&
          <h3>
            &#62; <span className="error-msg">ERR: UNKNOWN COMMAND</span>
          </h3>
        }
        <h3>
          &#62; {terminalInput}<span className="blinker">_</span>
        </h3>
      </div>

      <div className="row mt-5">
        {data.map((item,i)=> (
          <div className="col-lg-4 mb-4" key={i}>
            <PortfolioCard 
              num={i+1}
              name={item.name}
              description={item.description}
              source={item.source}
              sourceCode={item.sourceCode}
              imgSource={item.imgSource}
              tools={item.tools}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
