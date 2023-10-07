import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";
import styles from "./Timeline.module.css";

const Timeline = () => {
    // CUSTOMIZATION FOR PHOTO SLIDE FRAME!
    const spanStyle = {};
    const divStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        width: "auto",
        height: "250px",
    };

    // IMGAGES FOR CARD 1
    const card_1 = [
        {
            url: "/assets/01-java.jpg",
        },
        {
            url: "/assets/02-java.jpg",
        },
    ];

    // IMGAGES FOR CARD 2
    const card_2 = [
        {
            url: "/assets/html_css_01.png",
        },
        {
            url: "/assets/html_css_02.png",
        },
        {
            url: "/assets/html_css_03.png",
        },
    ];

    // IMGAGES FOR CARD 3
    const card_3 = [
        {
            url: "/assets/tin_01.png",
        },
        {
            url: "/assets/tin_02.png",
        },
        {
            url: "/assets/tin_03.png",
        },
        {
            url: "/assets/tin_04.png",
        },
    ];

    // IMGAGES FOR CARD 4
    const card_4 = [
        {
            url: "/assets/clone_01.png",
        },
        {
            url: "/assets/clone_02.png",
        },
    ];

    // IMGAGES FOR CARD 5
    const card_5 = [
        {
            url: "/assets/resume_maker_01.png",
        },
        {
            url: "/assets/resume_maker_02.png",
        },
        {
            url: "/assets/resume_maker_03.png",
        },
        {
            url: "/assets/resume_maker_04.png",
        },
    ];

    return (
        <section style={{ color: "white" }}>
            <VerticalTimeline>
                {/* CARD 1 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="Mar - May 2021"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        I started learning to code
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">JAVA</h4>
                    <p>
                        After watching "The Social Network" I found myself inspired to try
                        coding. I watched a few YouTube videos and began reading Head First
                        Java. Learning the basics hooked me instantly, and I enjoyed writing
                        code and creating small programs with loops.
                    </p>
                    <br />
                    <Slide>
                        {card_1.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        ...divStyle,
                                        backgroundImage: `url(${slideImage.url})`,
                                    }}
                                >
                                    <span style={spanStyle}>{slideImage.caption}</span>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </VerticalTimelineElement>

                {/* CARD 2 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2021"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        How I got into web development?
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        I used to watch a ton of coding videos on YouTube where people were
                        building amazing things with HTML, CSS, and JavaScript—like websites
                        and mini web apps. The desire to create something similar sparked in
                        me. After some research, I stumbled upon the world of web-dev.
                        <br />
                        <br />I started my journey by learning HTML and CSS, and later on,
                        JavaScript from CodeWithHarry's YouTube channel. HTML seemed
                        relatively straightforward, but I struggled with CSS.
                    </p>
                    <br />
                    <Slide>
                        {card_2.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        ...divStyle,
                                        backgroundImage: `url(${slideImage.url})`,
                                    }}
                                >
                                    <span style={spanStyle}>{slideImage.caption}</span>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </VerticalTimelineElement>

                {/* CARD 3 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May - Jun 2021"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        I decided to build some fun stuff
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        I learned HTML, CSS, and the basics of JavaScript. Also worked
                        little with bootstrap. Then, I began tinkering with my newfound
                        knowledge. I created a simple dictionary web app—pretty lame, but at
                        the time, I found it fascinating. It would send a request to a free
                        API and return the meaning as a JSON object, which I displayed on
                        the page using a 'for' loop.
                        <br />
                        <br />
                        I created a digital clock which would also show a quote, and in
                        every 15 mins the quote would change using setInterval function
                        which would call the API again. Similarly I also created a stopwatch
                        and a notes-app.
                        <br />
                    </p>
                    <br />
                    <Slide>
                        {card_3.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        ...divStyle,
                                        backgroundImage: `url(${slideImage.url})`,
                                    }}
                                >
                                    <span style={spanStyle}>{slideImage.caption}</span>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </VerticalTimelineElement>

                {/* CARD 4 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2021"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        I kept writing CSS
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        I wasn't great at CSS; I remember that clearly. I wanted to design
                        pretty websites. I watched a YouTube video where they copied designs
                        from big companies like Amazon and Netflix. I tried it with Uber and
                        Starbucks sites. They weren't perfect, and they lacked
                        responsiveness, but I felt really happy and confident. I enjoyed
                        building things. Also used chrome dev, it felt like cheating to use
                        inspect elements 😂
                    </p>
                    <br />
                    <Slide>
                        {card_4.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        ...divStyle,
                                        backgroundImage: `url(${slideImage.url})`,
                                    }}
                                >
                                    <span style={spanStyle}>{slideImage.caption}</span>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </VerticalTimelineElement>

                {/* CARD 5 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Sep 2021"
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                    contentStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(233, 30, 99)",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">Resume Maker </h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        I used to be quite active on LinkedIn. One day, I stumbled upon a
                        post where someone was struggling to create a resume. That sparked
                        an idea: 'Could I create a website to help people make resumes?'
                        After some quick research, I decided to give it a try.
                        <br />
                        <br />
                        I wasn't very skilled, but I was determined. I found a resume
                        template through a Google search, wrote some basic HTML and CSS, and
                        even added a few free 3D illustrations to make it look good. Users
                        could visit the landing page, click 'create a new resume,' enter
                        their personal details, and with the help of JavaScript, those
                        details would dynamically appear in the design I had created. The
                        final resume was displayed. Everything seemed fine, but there was
                        one challenge left: enabling users to download the final resume.
                        <br />
                        <br />
                        After a bit more research on YouTube and Google, I discovered a
                        solution—an HTML-to-PDF library called 'html2pdf.' I implemented it
                        to allow users to download their resumes to their devices. The
                        entire project took about 4-5 days, and I couldn't believe how well
                        it turned out. Looking back, the design might seems childish, but I
                        was proud of what I had accomplished.
                    </p>
                    <br />
                    <Slide>
                        {card_5.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        ...divStyle,
                                        backgroundImage: `url(${slideImage.url})`,
                                    }}
                                >
                                    <span style={spanStyle}>{slideImage.caption}</span>
                                </div>
                            </div>
                        ))}
                    </Slide>
                    <br />
                    <span className={styles.span_links}>
                        <a href="https://snap-resume.vercel.app/" target="_blank">
                            snap-resume.vercel.app
                        </a>
                    </span>
                </VerticalTimelineElement>

                {/* CARD 6 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Oct - Nov 2021"
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                    contentStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(233, 30, 99)",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        I added few more things!
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        At that point, I had created a few things and felt a bit like Mark
                        Zuckerberg, haha lol. So, I decided to create a portfolio website to
                        showcase my work. The website looked decent, and I was satisfied
                        with it at the time. I also learned MySQL, Git, and Github. I kind
                        of liked Github; it helped me keep my project files organized, and
                        it's like a time machine where I can go back to the beginning.
                    </p>
                    <br />
                    <span className={styles.span_links}>
                        <a href="https://portfolio-himanshu.netlify.app/" target="_blank">
                            portfolio-himanshu.netlify.app
                        </a>
                        <a href="https://github.com/gabbar-singhh/" target="_blank">
                            github.com/gabbar-singhh
                        </a>
                    </span>
                </VerticalTimelineElement>

                {/* CARD 7 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Dec 2021 - Mar 2023"
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                    contentStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(233, 30, 99)",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Left coding for a year
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        Took a year off to explore coding. During high school, my parents wanted me to concentrate solely on my studies. I prepared for the National Defence Academy entrance exam, but unfortunately, I didn't pass it.
                        <br />
                        I also completed my 12th-grade CBSE board exams and managed to score decent marks.
                    </p>
                    <br />
                    <span>
                        $$add image$$
                    </span>
                </VerticalTimelineElement>

                {/* ON-GOING */}
                <VerticalTimelineElement
                    iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                />
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;
