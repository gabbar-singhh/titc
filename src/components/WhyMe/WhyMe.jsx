import React from "react";
import styles from "./WhyMe.module.css";

const WhyMe = () => {
  return (
    <section className={styles.main_section} id="why_me">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img
            height={600}
            width={"auto"}
            src="/assets/pfp.webp"
            alt="profile picture"
          />

          <span className={styles.text_box}>
            <h1>WHY ME?</h1>
            <p>
              I'm Himanshu Pal, an 18-year-old with just a laptop. While I'm
              still in the process of figuring things out, I possess a{" "}
              <span className={styles.highlight}>
                {" "}
                deep passion for programming.
              </span>{" "}
              I'm a self-taught web developer and also dabble in design. Beyond
              programming, I find enjoyment in playing basketball & watching
              anime and movies.
            </p>

            <p>
              I believe I'm a perfect fit for the Google Developer Student Club
              because of my strong enthusiasm for programming and my dedication
              to self-improvement.
              <span className={styles.highlight}>
                {" "}
                Being an army brat, values of hard work, dedication, and
                discipline{" "}
              </span>{" "}
              are ingrained in me. What sets me apart is not just my technical
              skills but also my ability to learn and adapt. As a self-taught
              web developer, I've always been{" "}
              <span className={styles.highlight}>
                {" "}
                figuring out most of the stuff{" "}
              </span>{" "}
              on my own, Googling, ChatGPT'ing etc. I understand the hunger to
              learn, which are core principles that the Google Developer Student
              Club upholds.
              <br />
              <br />
              In conclusion, my passion for technology and my hunger to learn
              make me a prime candidate for the Google Developer Student Club.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
