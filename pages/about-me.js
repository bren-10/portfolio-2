import styles from "../styles/About.module.css";
import Link from "next/link";

export default function aboutMe() {
  return (
    <div className={styles.about}>
      <h2>&#62; ABOUT ME</h2>
      <h2>&#62; basic information about me</h2>
      <h2>&#62;</h2>
      <div className="link-area">
        <h2 className="main-link">
          &#62;{" "}
          <a href={"/cv.pdf"} target="_blank">
            <span>
              view CV<span className="blink-link">_</span>
            </span>
          </a>
        </h2>
        <h2 className="main-link">
          &#62;{" "}
          <Link href={"/"}>
            <span>
              back<span className="blink-link">_</span>
            </span>
          </Link>
        </h2>
        <h2>
          &#62; <span className="blinker">_</span>
        </h2>
      </div>

      <div>
        <p>
          Born in Cape Town, South Africa. Matriculated in 2011 at Durbanville
          High.
        </p>
        <p>
          I studied Audio Engineering for 5 years at 2 colleges and obtained my
          Diploma in Audio Engineering & Audio Technology.{" "}
        </p>
        <p>
          After more than a year of searching for a job in audio engineering and
          working as a manager & sales executive for a music store, I finally
          got a job as an Audio Engineer at a dubbing firm in Cape Town.
        </p>
        <p>
          I was soon promoted to Senior Manager & Production Coordinator at this
          company.
        </p>
        <p>
          After a few months I realised that this is not what I wanted to do. I
          felt quite brain-dead and the job was repetitive.
        </p>
        <p>
          I eventually came across a YouTube recommendation for learning Python.
          Ten minutes into this video I decided I want to make a career change.
          I quit my job a few weeks later and decided to self-study full-time
          whilst living with my folks. A massive risk, but completely worth it.
          Less than a year later I landed my first job as a Software Engineer
          (Full-stack Web Development), and I have been working as one since
          October 2020.
        </p>
        <p>
          I've learnt a substantial amount since I dove into coding in November
          2019 and it will forever be my passion.
        </p>
        <p>I also play guitar and drums, for what it's worth.</p>
      </div>
    </div>
  );
}
