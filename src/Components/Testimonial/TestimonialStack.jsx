import React, { useState } from "react";
import styles from "./TestimonialStack.module.css";
import TestimonialCard from "./TestimonialCard";
import { Fade } from "react-awesome-reveal";

const TestimonialStack = () => {
  const CALENDAR_LINK = "https://cal.com/work-with-bimboo/30min";

  const TESTIMONIAL_DATA = [
    {
      testimonialText: `
       <p>
         I recently used Thadani Intl. Trading for a shipment from China to India, and the experience was seamless. Before the main shipment, they provided samples for quality confirmation, which gave me great peace of mind. The final bulk order arrived safely, on time, and perfectly intact. Their professionalism and attention to detail in handling international logistics are top-notch. Highly recommended for any business looking for a trustworthy shipping partner & sourcing stuffs from China.
        </p>`,
      name: "Kunal Mishra",
      bio: "",
      imgSrc:
        "https://ui-avatars.com/api/?name=Kunal+Mishra&background=f6f7f8&color=1d3557&size=128",
    },
    {
      testimonialText: `
       <p>
      First of all, I am so glad I found this page on Instagram.
I was desperate to find this bottega suede bag and I was trying to source it from China for a lesser price. After much research, found this page. Saw their videos and I thought of asking them.
Obviously i was a bit skeptical on ordering since it was my first order and with so many ongoing scams anyone would be scared. 
But the team is so so sweet and generous!

        </p>
        <p>
        Lily is very cooperating when you ask regarding products and details. Mr. Kayyush is super helpful and friendly for sure! They also guide you through the entire process. Updates are  always given if any delays and the most important part is- the prices are so budget friendly for the same bags you would buy in luxury stores. Exact same material and every detail is gorgeous!
From their warehouse to the doorstep everything is managed without any hassle for the customer. 

        </p>
         <p>
       They also send videos before sending the products because in case something doesn’t look nice or doesn’t match your taste, they also get it exchanged ☺️


        </p>
         <p>
       All in all, if I have to recommend one page on Instagram to anyone, it’s this.

        </p>
      `,
      name: "Sneha",
      bio: "",
      imgSrc:
        "https://ui-avatars.com/api/?name=Sneha&background=f6f7f8&color=1d3557&size=128",
    },
    {
      testimonialText: `
       <p>
         We connected with you guys after seeing a reel. We have had issues since we were paying in advance but
You guys having a warehouse in china helped us gain confidence and yours n team's response to our WhatsApp query was always fast and as needed.
        </p>
         <p>
       We got delivery within 45 days as promised.

        </p>
         <p>
        We got 100% the same product.
        </p>

      `,
      name: "Jatin",
      bio: "",
      imgSrc:
        "https://ui-avatars.com/api/?name=Jatin&background=f6f7f8&color=1d3557",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className={`${styles.main}`} id="testimonials">
      <div className={styles.wavyTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <div className={`${styles.container}`}>
        <div className={styles.header}>
          <Fade delay={0} duration={1500} triggerOnce>
            <h1 className={styles.testimonialHeading}>
              our clients testimonials
            </h1>
          </Fade>

          <Fade delay={200} duration={1500} triggerOnce>
            <p className={styles.testimonialDesc}>
              Our clients share their experience working with us, sourcing
              products from China end-to-end.
            </p>
          </Fade>
        </div>

        <div
          className={`${styles.carouselWrapper} ${
            isPaused ? styles.pauseAnimation : ""
          }`}
        >
          <div className={styles.scrollingTrack}>
            <Fade cascade damping={0.15} duration={1000} triggerOnce>
              {TESTIMONIAL_DATA.concat(TESTIMONIAL_DATA).map(
                (testimonial, index) => (
                  <div
                    className={styles.card}
                    key={index}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <TestimonialCard
                      testimonialText={testimonial.testimonialText}
                      name={testimonial.name}
                      bio={testimonial.bio}
                      imgSrc={testimonial.imgSrc}
                    />
                  </div>
                ),
              )}
            </Fade>
          </div>
        </div>
      </div>
      <div className={styles.wavyBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialStack;
