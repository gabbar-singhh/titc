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
                            I'm Himanshu Pal, an 18-year-old with just a laptop. While I'm still in the process of figuring things out, I possess a deep passion for programming. I'm a self-taught web developer and also dabble in design.
                            <br />
                            <br />
                            Beyond programming, I find enjoyment in playing basketball, swimming, watching anime and movies.
                        </p>

                        <p>
                           I believe I'm a perfect fit for the Google Developer Student Club because of my strong enthusiasm for programming and my dedication to self-improvement.

                           What sets me apart is not just my technical expertise but also my ability to learn and adapt. As a self-taught web developer, I've honed the skill of problem-solving and finding innovative solutions. I'm not afraid to take on new challenges and push the boundaries of my knowledge.

                           My background has instilled in me the values of hard work, dedication, and a strong sense of community. I understand the importance of collaboration and teamwork, two core principles that the Google Developer Student Club upholds.

                           In conclusion, my journey, skill set, and passion for technology make me a prime candidate for the Google Developer Student Club. I possess the drive to continually improve my technical skills, the adaptability to keep pace with the evolving field of technology, and the personal qualities that align with Google's values. I'm excited about the opportunity to be a part of this dynamic and innovative community, contributing my skills and learning from my peers.
                        </p>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default WhyMe;
