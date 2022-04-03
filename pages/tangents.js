import styles from '../styles/Tangents.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function tangents() {
  const [terminalInput, setTerminalInput] = useState('')
  const [displayError, setDisplayError] = useState(false)
  const router = useRouter()
  const inputRef = useRef()
  
  // Source: https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it
  // With added functionality
  // Decided to go the route of window keystore detection instead of <input/> because of fancy blinker cursor not working well
  // with the input field.
  const keystrokeDetection = useCallback((event) => {
    event.preventDefault()
    const key = event.key
    const ignoreList = [
      "Shift",
      "Control",
      "Alt",
      "Escape",
      "Tab",
      "Home",
      "Delete",
      "End",
      "Meta",
      "CapsLock",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ]

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
    <div className={styles.tangents}>
      <h3>&#62; TANGENTS</h3>
      <h3>&#62; ========</h3>
      <h3>&#62; for the sake of having a backend</h3>
      <h3>&#62;</h3>
      <div className="link-area">
        <h3 className='main-link'>&#62; <Link passHref href={'/'}><span>back<span className='blink-link'>_</span></span></Link></h3>
        {displayError &&
          <h3>
            &#62; <span className="error-msg">ERR: UNKNOWN COMMAND</span>
          </h3>
        }
        <h3>&#62; {terminalInput}<span className='blinker'>_</span></h3>
      </div>
    </div>
  )
}
