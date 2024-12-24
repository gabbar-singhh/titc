import React from "react";
import styles from "./ContactUsSection.module.css";
import Link from "next/link";

const ContactUsSection = () => {
  const emailClickHandler = () => {
    window.open("mailto:info@titc.co", "_blank");
  };
  const addressClickHandler = () => {
    window.open("https://maps.app.goo.gl/qmfShD2kHS1kBMhZA", "_blank");
  };
  return (
    <section className={styles.main}>
      <div className={styles.contact_left}>
        <h3 className={styles.heading}>Ready to import from China?</h3>
        <p className={styles.desc}>
          We handle everything—from finding trusted suppliers to delivering to
          your doorstep.
        </p>

        <ul className={styles.contact_options}>
          <li>
            <img src="/icons/call_icon.svg" alt="call icon" />
            <p>+86 13538501419 , +91 8208896517</p>
          </li>
          <li>
            <img src="/icons/mail_icon.svg" alt="mail icon" />
            <p onClick={emailClickHandler}>info@titc.co</p>
          </li>
          <li>
            <img src="/icons/address_icon.svg" alt="address icon" />
            <p onClick={addressClickHandler}>
              Office No. 403, Building 1, Guangda Rd N, 1st St, <br />
              Dongcheng, Dongguan, Guangdong, China.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.contact_right}>
        <div className={styles.form_container}>
          <div className={styles.row_1}>
            <span>
              <p>Name *</p>
              <input type="text" placeholder="Your name" name="name" />
            </span>

            <span>
              <p>Company *</p>
              <input type="text" placeholder="Company name" name="company" />
            </span>
          </div>

          <div className={styles.row_2}>
            <span>
              <p>Email *</p>
              <input
                type="email"
                placeholder="your@company.com"
                name="emailid"
                id=""
              />
            </span>

            <span>
              <p>Phone number *</p>
              <input
                type="number"
                placeholder="+91 987654321"
                name="phonenum"
                style={{
                  appearance: "none",
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />
            </span>
          </div>

          <div className={styles.row_3}>
            <span>
              <p>how can we help you?</p>
              <textarea
                name="message"
                placeholder="Type your message..."
                id=""
              ></textarea>
            </span>
          </div>

          <div className={`${styles.form_submit}`}>
           send message
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
