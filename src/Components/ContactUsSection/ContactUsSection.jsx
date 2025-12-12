"use client"

import React, { useState, useEffect } from "react";
import styles from "./ContactUsSection.module.css";
import emailjs from "@emailjs/browser";
import IsEmail from "isemail";
import { Spinner } from "@radix-ui/themes";

const ContactUsSection = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("default");
  const [showErrorVal, setShowErrorVal] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    companyName: "",
    emailId: "",
    phoneNum: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log("1");
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const EMAILJS_P_KEY = process.env.NEXT_PUBLIC_EMAILJS_P_KEY;

    const TEMPLATE_PARAMS = {
      name: formData.username,
      company_name: formData.companyName,
      email_id: formData.emailId,
      phone_number: formData.phoneNum,
      help_message: formData.message,
    };

    event.preventDefault();
    if (
      formData.username.length !== 0 &&
      IsEmail.validate(formData.emailId) === true &&
      formData.phoneNum.length >= 3
    ) {
      console.log("2");
      setShowLoading(true);
      const TEMPLATE_PARAMS = {
        name: formData.username,
        company_name: formData.companyName,
        email_id: formData.emailId,
        phone_number: formData.phoneNum,
        help_message: formData.message,
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, EMAILJS_P_KEY)
        .then((res) => {
          console.log("✅ sent: ", res);
          setShowErrorVal(true);
          setErrorMessage("message sent");
          setTimeout(() => {
            setShowErrorVal(false);
          }, 3000);
          setFormData({
            username: "",
            companyName: "",
            emailId: "",
            phoneNum: "",
            message: "",
          });

          setShowLoading(false);
        })
        .catch((err) => {
          // console.log("⛔️ not sent: ", err);
          setShowLoading(false);
          setShowErrorVal(true);
          console.log("error!!!!: ", err)
          setErrorMessage("* Technical Error. Message not sent.");
          setTimeout(() => {
            setShowErrorVal(false);
          }, 3000);
        });
    } else {
      setShowErrorVal(true);
      setErrorMessage("* Please enter your valid details.");
      setTimeout(() => {
        setShowErrorVal(false);
      }, 3000);
    }
  };

  const emailClickHandler = () => {
    window.open("mailto:	inquiry@thadaniinternationaltrading.com", "_blank");
  };
  const addressClickHandler = () => {
    window.open("https://maps.app.goo.gl/qmfShD2kHS1kBMhZA", "_blank");
  };

  useEffect(() => {
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const EMAILJS_P_KEY = process.env.EMAILJS_P_KEY;

    console.log(SERVICE_ID, TEMPLATE_ID, EMAILJS_P_KEY )
  }, [])
  
  return (
    <>
      <section className={styles.main}>
        <div className={styles.contact_left}>
          <h3 className={styles.heading}>Ready to import from China?</h3>
          <p className={styles.desc}>
            {" "}
            We handle everything—from finding trusted suppliers to delivering{" "}
            <br /> to your doorstep.
          </p>

          <ul className={styles.contact_options}>
            <li className={styles.first_li}>
              <img src="/icons/call_icon.svg" alt="call icon" />
              <p>+91 8805523442</p>
            </li>
            <li>
              <img src="/icons/mail_icon.svg" alt="mail icon" />
              <p onClick={emailClickHandler}>
                	inquiry@thadaniinternationaltrading.com
              </p>
            </li>
            <li>
              <img src="/icons/address_icon.svg" alt="address icon" />
              <p onClick={addressClickHandler}>
                Office No. 403, Building 1, Guangda Rd N, 1st St, Dongcheng,
                Dongguan, Guangdong, China.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.contact_right}>
          <div className={styles.form_container}>
            <div className={styles.row_1}>
              <span>
                <p>Name *</p>
                <input
                  type="text"
                  placeholder="Your name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </span>

              <span>
                <p>Company</p>
                <input
                  type="text"
                  placeholder="Company name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </span>
            </div>

            <div className={styles.row_2}>
              <span>
                <p>Email *</p>
                <input
                  type="email"
                  placeholder="your@company.com"
                  name="emailId"
                  id=""
                  value={formData.emailId}
                  onChange={handleChange}
                />
              </span>

              <span>
                <p>WhatsApp number *</p>
                <input
                  type="number"
                  placeholder="+44 7911 123456"
                  name="phoneNum"
                  onChange={handleChange}
                  value={formData.phoneNum}
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
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  id=""
                ></textarea>
              </span>
            </div>

            <div className={styles.row_4}>
              <p
                className={`${styles.error_message} ${
                  showErrorVal ? "" : styles.hidden
                }`}
              >
                {errorMessage}
              </p>
            </div>

            <div className={`${styles.form_submit}`} onClick={handleSubmit}>
              {showLoading ? (
                <Spinner style={{ paddingTop: "4px" }} size={"3"} />
              ) : (
                "send message"
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
