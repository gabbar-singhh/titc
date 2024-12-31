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
    height: "200px",
  };

  return (
    <section className={styles.timeline_main} id="my_journey">
      <h2>5 Step Process of our Business</h2>

      <div className={styles.timeline_container}>
        <VerticalTimeline
          layout="2-columns"
          lineColor="#1D3557"
          className={styles.verticalTimeline_container}
        >
          <VerticalTimelineElement
            className={`${styles.timeline_element}  vertical-timeline-element--work`}
            contentStyle={{
              background: "#1D3557",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1D3557",
            }}
            dateClassName={styles.timeline_element_date}
            iconClassName={styles.timeline_element_icon}
            date="Step 1"
          >
            <img
              src="/icons/timeline/1.svg"
              height={42}
              width={42}
              alt="form icon"
            />
            <h3 className="vertical-timeline-element-title">Inquiry</h3>
            <p>
              Understand the buyer's needs by gathering details about the
              product, quantity, specifications, and delivery requirements.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={`${styles.timeline_element}  vertical-timeline-element--work`}
            contentStyle={{
              background: "#1D3557",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1D3557",
            }}
            dateClassName={styles.timeline_element_date}
            iconClassName={styles.timeline_element_icon}
            date="Step 2"
          >
            <img
              src="/icons/timeline/2.svg"
              alt="search icon"
              height={42}
              width={42}
            />
            <h3 className="vertical-timeline-element-title">
              Sourcing & Finding the right manufacturer
            </h3>
            <p>
              Search for reliable manufacturers who can meet the product
              quality, quantity, and price expectations within deadlines.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={`${styles.timeline_element}  vertical-timeline-element--work`}
            contentStyle={{
              background: "#1D3557",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1D3557",
            }}
            dateClassName={styles.timeline_element_date}
            iconClassName={styles.timeline_element_icon}
            date="Step 3"
          >
            <img
              src="/icons/timeline/3.svg"
              alt="handshake icon"
              height={42}
              width={42}
            />
            <h3 className="vertical-timeline-element-title">
              Dealing & Negotiations
            </h3>
            <p>
              Discuss terms like pricing, delivery timelines, payment methods,
              and other conditions to finalize a mutually beneficial agreement.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={`${styles.timeline_element}  vertical-timeline-element--work`}
            contentStyle={{
              background: "#1D3557",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1D3557",
            }}
            dateClassName={styles.timeline_element_date}
            iconClassName={styles.timeline_element_icon}
            date="Step 4"
          >
            <img
              src="/icons/timeline/4.svg"
              alt="credit card icon"
              height={42}
              width={42}
            />
            <h3 className="vertical-timeline-element-title">Vendor Payments</h3>
            <p>
              Process payments securely to the chosen vendor after confirming
              all terms and conditions are clearly agreed upon.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={`${styles.timeline_element}  vertical-timeline-element--work`}
            contentStyle={{
              background: "#1D3557",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1D3557",
            }}
            dateClassName={styles.timeline_element_date}
            iconClassName={styles.timeline_element_icon}
            date="Step 5"
          >
            <img
              src="/icons/timeline/5.svg"
              alt="check icon"
              height={42}
              width={42}
            />
            <h3 className="vertical-timeline-element-title">
              Goods Inspection
            </h3>
            <p>
              Thoroughly check the products for quality, specifications, and
              compliance before they are approved for shipment.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className={`${styles.timeline_element}  vertical-timeline-element--work`}
            contentStyle={{
              background: "#1D3557",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1D3557",
            }}
            dateClassName={styles.timeline_element_date}
            iconClassName={styles.timeline_element_icon}
            date="Step 6"
          >
            <img
              src="/icons/timeline/6.svg"
              alt="airplane icon"
              height={42}
              width={42}
            />
            <h3 className="vertical-timeline-element-title">Shipping</h3>
            <p>
              Arrange safe and timely delivery of the goods to the buyer’s
              location, ensuring proper documentation and logistics.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

    </section>
  );
};

export default Timeline;
