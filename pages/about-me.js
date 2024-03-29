import styles from "../styles/About.module.css";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function AboutMe() {
  const cvRef = useRef();
  const [terminalInput, setTerminalInput] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [currentAge, setCurrentAge] = useState(false);
  const router = useRouter();
  const inputRef = useRef();

  function getCurrentAge() {
    const birthDay = new Date('29 August 1993');

    const ageDifMs = Date.now() - birthDay;
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // Source: https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it
  // With added functionality
  // Decided to go the route of window keystore detection instead of <input/> because of fancy blinker cursor not working well
  // with the input field.
  const keystrokeDetection = useCallback((event) => {
    event.preventDefault();
    const key = event.key;
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
    ];

    function handleInput() {
      if (!ignoreList.includes(key)) {
        setTerminalInput((prev) => prev.concat(key));
      }
    }

    function handleSubmission() {
      setDisplayError(false);
      const input = inputRef.current.toLowerCase();
      if (input === "back") {
        router.back();
      } else if (input.includes("cv")) {
        cvRef.current.click();
      } else {
        setDisplayError(true);
      }
    }

    // For the sake of speed-typers, I'd rather do switch/case
    switch (key) {
      case "Enter":
        handleSubmission();
        break;
      case "Backspace":
        setTerminalInput((prev) => prev.slice(0, -1));
        break;
      case "Space":
        setTerminalInput((prev) => prev.concat(" "));
        break;
      default:
        handleInput();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keystrokeDetection, false);

    return () => {
      document.removeEventListener("keydown", keystrokeDetection, false);
    };
  }, []);

  useEffect(() => {
    if (displayError && !terminalInput) {
      setDisplayError(false);
    }
    inputRef.current = terminalInput;
  }, [terminalInput]);

  useEffect(() => {
    const age = getCurrentAge();
    setCurrentAge(age)
  }, [])

  return (
    <div className={styles.about}>
      <h3>&#62; ABOUT ME</h3>
      <h3>&#62; ========</h3>
      <h3>&#62; basic information about me</h3>
      <h3>&#62;</h3>
      <div className="link-area">
        <h3 className="main-link">
          &#62;{" "}
          <a
            className={styles.unLink}
            href={"/cv.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            <span ref={cvRef}>
              view CV<span className="blink-link">_</span>
            </span>
          </a>
        </h3>
        <h3 className="main-link">
          &#62;{" "}
          <Link passHref href={"/"}>
            <span>
              back<span className="blink-link">_</span>
            </span>
          </Link>
        </h3>
        {displayError && (
          <h3>
            &#62; <span className="error-msg">ERR: UNKNOWN COMMAND</span>
          </h3>
        )}
        <h3>
          &#62; {terminalInput}
          <span className="blinker">_</span>
        </h3>
      </div>

      <div className={styles.aboutMeContainer}>
        <p>
          Born in Cape Town, South Africa. Matriculated in 2011 at Durbanville
          High. Currently {currentAge} years old.
        </p>
        <p>
          I studied Audio Engineering for 5 years at 2 colleges and obtained my
          Diploma in Audio Engineering & Audio Technology in 2016.
        </p>
        <p>
          After more than a year&apos;s searching for a job in audio engineering
          whilst working as a manager & sales executive for a music store, I
          finally got a job as an Audio Engineer at a dubbing firm in Cape Town.
        </p>
        <p>
          I was soon promoted to Senior Manager & Production Coordinator at this
          company.
        </p>
        <p>
          After a few months I realised that this is not what I wanted to do.
          The job didn&apos;t involve much brain power, which in turn made me
          miserable as I thrive on learning and problem solving daily.
        </p>
        <p>
          I eventually came across a YouTube recommendation for learning Python.
          Ten minutes into this video I decided I want to make the career
          change. I quit my job a few weeks later in order to self-study
          full-time. A massive risk, but completely worth it. Less than a year
          later I landed my first job as a Software Engineer (Full-stack Web
          Development), and I have been working as one since October 2020.
        </p>
        <p>
          I&apos;ve learnt a substantial amount since I dove into coding in
          November 2019 and it will forever be my passion.
        </p>
        <p className="text-decoration-underline">
          Some of my familiar languages & frameworks include:
        </p>
        <p>
          &#62; Python<br></br>&#62; Javascript<br></br>&#62; React<br></br>
          &#62; NextJS<br></br>
          &#62; Django<br></br>&#62; ExpressJS
        </p>
        <p className="text-decoration-underline">I also know the basics of:</p>
        <p>
          &#62; Angular<br></br>&#62; PHP<br></br>&#62; TypeScript<br></br>&#62;
          Flask<br></br>&#62; Web2Py
          <br></br>&#62; C#<br></br>&#62; VueJS
        </p>
        <p>
          I also play guitar and drums, for what that&apos;s worth
          <span className="blinker">_</span>
        </p>
      </div>
    </div>
  );
}
