import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
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
      url: "/assets/01-java.webp",
    },
    {
      url: "/assets/02-java.webp",
    },
  ];

  // IMGAGES FOR CARD 2
  const card_2 = [
    {
      url: "/assets/html_css_01.webp",
    },
    {
      url: "/assets/html_css_02.webp",
    },
    {
      url: "/assets/html_css_03.webp",
    },
  ];

  // IMGAGES FOR CARD 3
  const card_3 = [
    {
      url: "/assets/tin_01.webp",
    },
    {
      url: "/assets/tin_02.webp",
    },
    {
      url: "/assets/tin_03.webp",
    },
    {
      url: "/assets/tin_04.webp",
    },
  ];

  // IMGAGES FOR CARD 4
  const card_4 = [
    {
      url: "/assets/clone_01.webp",
    },
    {
      url: "/assets/clone_02.webp",
    },
  ];

  // IMGAGES FOR CARD 5
  const card_5 = [
    {
      url: "/assets/resume_maker_01.webp",
    },
    {
      url: "/assets/resume_maker_02.webp",
    },
    {
      url: "/assets/resume_maker_03.webp",
    },
    {
      url: "/assets/resume_maker_04.webp",
    },
  ];

  // IMGAGES FOR CARD 8
  const card_8 = [
    {
      url: "/assets/gotup_01.webp",
    },
    {
      url: "/assets/gotup_02.webp",
    },
  ];

  // IMGAGES FOR CARD 9
  const card_9 = [
    {
      url: "/assets/linkfy_01.webp",
    },
    {
      url: "/assets/linkfy_02.webp",
    },
    {
      url: "/assets/linkfy_03.webp",
    },
  ];

  // IMGAGES FOR CARD 10
  const card_10 = [
    {
      url: "/assets/work_01.webp",
    },
    {
      url: "/assets/work_02.webp",
    },
  ];

  return (
    <section className={styles.timeline_main} id="my_journey">
      <h3>SNEAK-PEAK INTO MY PROGRAMMING JOURNEY!</h3>
      <VerticalTimeline layout="2-columns" className={styles.verticalTimeline_container}>
        {/* CARD 1 */}
        <VerticalTimelineElement
          className={`${styles.card_title}  vertical-timeline-element--work`}
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

          <h4 className={`vertical-timeline-element-subtitle`}></h4>
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
        position="right"
          className={`${styles.card_title}  vertical-timeline-element--work`}
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
          className={`${styles.card_title}  vertical-timeline-element--work`}
          date="Jun - Jul 2021"
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
          className={`${styles.card_title}  vertical-timeline-element--work`}
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
          className={`${styles.card_title}  vertical-timeline-element--work`}
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
          className={`${styles.card_title}  vertical-timeline-element--work`}
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
          className={`${styles.card_title}  vertical-timeline-element--work`}
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
            Took a year off to explore coding. During high school, my parents
            wanted me to concentrate solely on my studies. I prepared for the
            National Defence Academy entrance exam, but unfortunately, I didn't
            pass it.
            <br />I also completed my 12th-grade CBSE board exams and managed to
            score decent marks.
          </p>
          <br />
          <img src="/assets/prep_me.webp" width={"100%"} />
        </VerticalTimelineElement>

        {/* CARD 8 */}
        <VerticalTimelineElement
          className={`${styles.card_title}  vertical-timeline-element--work`}
          date="Apr 2023"
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
            Getting back to Code!
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            I got back into programming, revisited the fundamentals of CSS and
            JavaScript, and began exploring NPM and Next.js. I built two simple
            websites to refresh my knowledge and enhance my design skills, which
            I learned from watching YouTube videos.
          </p>
          <br />
          <Slide>
            {card_8.map((slideImage, index) => (
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
            <a href="https://polyverse.netlify.app/" target="_blank">
              polyverse.netlify.app
            </a>
            <a href="https://get-protonn.netlify.app/" target="_blank">
              get-protonn.netlify.app
            </a>
          </span>
        </VerticalTimelineElement>

        {/* CARD 9 */}
        <VerticalTimelineElement
          className={`${styles.card_title}  vertical-timeline-element--work`}
          date="May 2023"
          iconStyle={{ background: "rgb(103 0 131)", color: "#fff" }}
          contentStyle={{
            background: "rgb(103 0 131)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(103 0 131)",
          }}
        >
          <h3 className="vertical-timeline-element-title">Building Linkfy</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Linkfy is a web app that makes sharing easier by shortening long
            URLs. I created it using Next.js and Firebase as the back-end. I
            built it in just 10 days as part of the popular{" "}
            <i>#10DayWebBuild </i> challenge on Twitter.It was a fantastic
            experience, though it got quite hectic. I even made some new
            developer friends on Twitter.
            <br />
            <br />I began writing articles on Medium.com to help myself. These
            articles cover what I've learned while building small projects. It's
            those little details that matter but can be easy to forget, leaving
            you to search on Google all over again.
          </p>
          <br />
          <Slide>
            {card_9.map((slideImage, index) => (
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
            <a href="https://linkfy.vercel.app/" target="_blank">
              linkfy.vercel.app
            </a>
            <a href="https://medium.com/@garadiya0" target="_blank">
              medium.com/@garadiya0
            </a>
          </span>
        </VerticalTimelineElement>

        {/* CARD 10 */}
        <VerticalTimelineElement
          className={`${styles.card_title}  vertical-timeline-element--work`}
          date="Jun - Jul 2023"
          iconStyle={{ background: "rgb(103 0 131)", color: "#fff" }}
          contentStyle={{
            background: "rgb(103 0 131)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(103 0 131)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            I started working for a company
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            I attended a Startup & Networking Meetup in Pune out of
            curiosity.Later, I joined their WhatsApp group. About a month later,
            I decided to seek an internship. I reached out startups & founders
            within a 15km radius sent them cold emails. NO REPLY!
            <br />
            <br />
            I felt demotivated. But I gathered the courage to drop a message in
            the Startup & Networking Meetup group where I had been added a month
            earlier. To my surprise, a CEO replied within an hour. We had a
            candid conversation, and he suggested meeting in person. I agreed.
            <br />
            <br />
            The next day, I met him at their office. I was both excited and
            nervous. He's a CEO, and I'm just a high school student. I met their
            team, and they asked me many questions. I found their team
            impressive. We also discussed the internship stipend (which was
            surprisingly good, although I was willing to work for free in the
            name of experience).
            <br />
            <br />I also wanted my own website to showcase what I've made and
            share my articles. So, I created one using Next.js.
          </p>
          <br />
          <Slide>
            {card_10.map((slideImage, index) => (
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
            <a href="https://codexhimanshu.in/" target="_blank">
              codexhimanshu.in
            </a>
          </span>
        </VerticalTimelineElement>

        {/* CARD 11 */}
        <VerticalTimelineElement
          className={`${styles.card_title}  vertical-timeline-element--work`}
          date="Aug - Sep 2023"
          iconStyle={{ background: "rgb(103 0 131)", color: "#fff" }}
          contentStyle={{
            background: "rgb(103 0 131)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(103 0 131)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Got accepted into Buildspace!
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            I got accepted into Buildspace. Buildspace is a online program or
            kinda school where you get to work on your idea for 6 weeks and get
            a chance to win $250000. I decided to work on building a chrome
            extension which will turn your boring default homepage, into a
            productivity-focused homepage along with aesthetically pleasing UI.
            Got 30 people signing up for that. Currently working on this, it
            will be launched soon!
            <br />
            <br />I joined MIT WPU for my Bachelors. It's been 2 months and I
            think it's a great college.
          </p>
          <br />
          <img src="/assets/chromeland.webp" width={"100%"} />
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
