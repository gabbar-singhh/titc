import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import FooterSection from "@/Components/FooterSection/FooterSection";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import IsEmail from "isemail";
import { Spinner, Tooltip } from "@radix-ui/themes";

const contact = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("default");
  const [showErrorVal, setShowErrorVal] = useState(false);

  const [imageLoaded, setImageLoaded] = useState(false);

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
          // console.log("✅ sent: ", res);
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

  const openMapClickHandler = () => {
    window.open("https://maps.app.goo.gl/qmfShD2kHS1kBMhZA", "_blank");
  };
  const emailClickHandler = () => {
    window.open("mailto:thadani.internationaltrading@gmail.com", "_blank");
  };
  const addressClickHandler = () => {
    window.open("https://maps.app.goo.gl/qmfShD2kHS1kBMhZA", "_blank");
  };

  
  const openWhatsAppHandler = () => {
    const phoneNumber = "8613538501419";
    const message = encodeURIComponent(
      "Hello Kayyush, I visited your website and I'd be interested to know more!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
};

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = "/img/man_calling.webp";
  }, ["/img/man_calling.webp"]);
  return (
    <>
      <Head>
        <title>Contact for International Trading with China | Thadani International Trading</title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className={`${styles.main}`}>
        <section className={styles.container}>
          <div className={styles.hero_content}>
            <div className={styles.leftSide}>
              <Fade triggerOnce direction="up">
                <p>Contact Us</p>
              </Fade>

              <Fade triggerOnce direction="up">
                <h1>You're Just One WhatsApp Text Away From Success</h1>
              </Fade>

              <Fade triggerOnce direction="up">
                <div onClick={openWhatsAppHandler} className={styles.cta}>
                  Get in Touch on WhatsApp{" "}
                  <img
                    src="/icons/arrow_up_right.svg"
                    alt="arrow upright icon"
                  />
                </div>
              </Fade>
            </div>

            <div className={styles.rightSide}>
              <Fade triggerOnce duration={1000}>
                {imageLoaded ? (
                  <img
                    src="/img/man_calling.webp"
                    alt="man in formals on a call"
                  />
                ) : (
                  <img
                    src="/img/man_calling_blur.webp"
                    alt="man in formals on a call"
                  />
                )}
              </Fade>
            </div>
          </div>

          <div className={styles.custom_shape_divider_bottom_1735337911}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={styles.shape_fill}
              ></path>
            </svg>
          </div>
        </section>

        <section className={styles.contact_form} id="contact-form">
          <div className={styles.contact_left}>
            <h3 className={styles.heading}>
              Looking for a reliable trading company to import from China?
            </h3>
            <p className={styles.desc}>
              Everything starts with <b>"hello"</b>. Drop us a line, and let's create something amazing together.
            </p>

            <ul className={styles.contact_options}>
              <li className={styles.first_li}>
                <img src="/icons/call_blue.svg" alt="call icon" />
                <p>+86 13538501419</p>
              </li>
              <li>
                <img src="/icons/mail_blue.svg" alt="mail icon" />
                <p onClick={emailClickHandler}>
                  thadani.internationaltrading@gmail.com
                </p>
              </li>
              <li>
                <img src="/icons/address_blue.svg" alt="address icon" />
                <p onClick={addressClickHandler}>
                  Office No. 403, Building 1, Guangda Rd N, 1st St,Dongcheng, Dongguan, Guangdong, China.
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

        <div className={styles.location}>
          <div className={styles.left}>
            <h2>Our Location</h2>
            <p>Want to schedule a meeting with us?</p>

            <div>
              <h3>Dongguan, China</h3>
              <p>
              Office No. 403, Building 1, Guangda Rd N, 1st St,Dongcheng, Dongguan, Guangdong, China.
              </p>
            </div>

            <span className={styles.view} onClick={openMapClickHandler}>
              View In Map
              <img
                src="/icons/arrow_up_right_blue.svg"
                alt="arrow upright icon"
              />
            </span>
          </div>
          <div className={styles.right}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6566512613167!2d113.77797!3d22.999649999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34039fedab820ed7%3A0x97280b4a35241334!2sXin%20Hongyuan%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1735071989353!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <FooterSection />
      </section>
    </>
  );
};

export default contact;
