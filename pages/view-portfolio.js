import styles from "../styles/Portfolio.module.css";
import Link from "next/link";
import PortfolioCard from "../components/PortfolioCard";
import portfolioData from "../portfolioData.json";
import { useCallback, useRef, useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";

export default function Portfolio() {
  const data = portfolioData.portfolioData;
  const [terminalInput, setTerminalInput] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [projectsType, setProjectsType] = useState("personal");
  const router = useRouter();
  const inputRef = useRef();

  const workImages = [
    {
      original: "/portfolio/res_login.png",
      thumbnail: "/portfolio/res_login.png",
    },
    {
      original: "/portfolio/res_step1.png",
      thumbnail: "/portfolio/res_step1.png",
    },
    {
      original: "/portfolio/res_step2.png",
      thumbnail: "/portfolio/res_step2.png",
    },
    {
      original: "/portfolio/res_step3.png",
      thumbnail: "/portfolio/res_step3.png",
    },
    {
      original: "/portfolio/res_step4.png",
      thumbnail: "/portfolio/res_step4.png",
    },
    {
      original: "/portfolio/res_cart.png",
      thumbnail: "/portfolio/res_cart.png",
    },
    {
      original: "/portfolio/res_bookings.png",
      thumbnail: "/portfolio/res_bookings.png",
    },
    {
      original: "/portfolio/res_grid.png",
      thumbnail: "/portfolio/res_grid.png",
    },
  ];

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
      } else if (input.includes("personal")) {
        setProjectsType("personal");
      } else if (input.includes("work")) {
        setProjectsType("work");
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

  function switchProjects() {
    if (projectsType === "personal") {
      setProjectsType("work");
      return;
    }
    setProjectsType("personal");
    return;
  }

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
          &#62; {projectsType === "personal" ? "work" : "personal"} projects
          <span className="blink-link">_</span>
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
      {projectsType === "personal" && (
        <div className="row mt-5">
          {data.map((item, i) => (
            <div className="col-lg-4 mb-4" key={i}>
              <PortfolioCard
                num={i + 1}
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
      )}
      {projectsType === "work" && (
        <div className={styles.work}>
          <p>
            Understandably, I cannot share the code of my work projects, but
            apparently I am allowed to take a video/screenshots of my work and
            explain what I did.
          </p>
          <p>
            Below I am sharing our demonstration website with non-sensitive
            information of a group reservations platform which I have
            single-handedly built over the last 6 months. Please excuse the
            styling for this demo site as it still requires some work.
          </p>
          <p>
            It was built using React/NextJS including various NPM libraries and
            a payment portal. Most of the site is a single page application with
            an installation-wizard-like feel to it. The bookings steps are built
            inside a carousel, which provides a very smooth UI. The application
            is connecting to our custom Python-built backend, and communicates
            to our own software where our client&apos;s information is stored.
          </p>
          <p>
            Clients that have signed up for and are currently testing this
            reservations site include NWR (Namibian Wildlife Resorts), Ongava
            and Konka. All with their own customised styling.
          </p>
          <p>
            I have also built an online trading platform for Globex360, as well
            as an online Point Of Sale system (also communicating to our POS
            software). Both of which are incomplete and currently contains
            sensitive client data, thus I will not be able to share sreenshots.{" "}
          </p>
          <ReactPlayer
            url="/portfolio/res.webm"
            playing
            controls
            className={styles.player}
          />
          <hr className={styles.workHr} />
          <div className={styles.gallery}>
            <ImageGallery items={workImages} />
          </div>
        </div>
      )}
    </div>
  );
}
