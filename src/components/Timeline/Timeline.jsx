import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <section style={{ color: "white" }}>
            <VerticalTimeline>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={
                        {
                            background: 'rgb(33, 150, 243)',
                            color: '#fff'
                        }
                    }

                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)'
                    }}

                    date="Mar 2021"

                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff'
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        I started learning to code
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        JAVA
                    </h4>
                    <p>
                        After watching "The Social Network" I found myself inspired to try coding. I watched a few YouTube videos and began reading Head First Java. Learning the basics hooked me instantly, and I enjoyed writing code and creating small programs with loops.
                    </p>
                    <br />
                    <img src="/assets/2020/01-java.jpg" height={"auto"} width={"100%"} alt="" />
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sep 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentStyle={
                        {
                            background: 'rgb(33, 150, 243)',
                            color: '#fff'
                        }
                    }

                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)'
                    }}
                >
                    <h3 className="vertical-timeline-element-title">I wanted to build some fun stuff</h3>
                    <h4 className="vertical-timeline-element-subtitle">HTML & CSS</h4>
                    <p>
                        I used to watch a ton of coding videos on YouTube where people were building amazing things with HTML, CSS, and JavaScript—like websites and mini web apps. The desire to create something similar sparked in me. After some research, I stumbled upon the world of web-dev.
                        <br />
                        I kicked off my journey by learning HTML & CSS from CodeWithHarry's YT channel. HTML felt relatively easy, but I had difficulty in CSS.
                    </p>
                </VerticalTimelineElement>



                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </section>
    )
}

export default Timeline