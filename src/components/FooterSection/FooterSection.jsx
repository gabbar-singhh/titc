import React from "react";
import styles from "./FooterSection.module.css";
import Link from "next/link";

const FooterSection = () => {
  const openMapLocationHandler = () => {
    window.open("https://maps.app.goo.gl/qmfShD2kHS1kBMhZA", "_blank");
  };

  const footerServicesClickHandler = () => {
    window.open("/services", "_self");
  };

  const footerProductClickHandler = () => {
    window.open("/product", "_self");
  };

  const footerAboutClickHandler = () => {
    window.open("/about_us", "_self");
  };

  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent("hello, I need your help.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className={styles.main}>
      <div className={styles.upper_foot}>
        <div className={styles.left_container}>
          <Link href={"/"}>
            <img
              src={"/img/logo_footer.png"}
              className={styles.logo_img}
              alt="tit logo"
            />
          </Link>

          <ul>
            <li>
              <Link href={"https://www.instagram.com/"} target="_blank">
                <img src="/icons/instagram.svg" alt="instagram logo" />
              </Link>
            </li>
            <li>
              <Link href={"https://www.facebook.com/"} target="_blank">
                <img src="/icons/facebook.svg" alt="facebook logo" />
              </Link>
            </li>
            <li>
              <Link href={"https://www.linkedin.com/"} target="_blank">
                <img src="/icons/linkedin.svg" alt="linkedin logo" />
              </Link>
            </li>
            <li>
              <Link href={"https://www.tiktok.com/"} target="_blank">
                <img src="/icons/tiktok.svg" alt="tiktok logo" />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.right_container}>
          <div className={styles.col_services}>
            <h3 onClick={footerServicesClickHandler}>
              Services
              <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
            </h3>
            <ul>
              <li>sourcing</li>
              <li>trading</li>
              <li>vendor payments</li>
              <li>shipping</li>
            </ul>

            <h3 onClick={footerProductClickHandler}>
              Products
              <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
            </h3>
            <h3 onClick={footerAboutClickHandler}>
              About Us
              <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
            </h3>
          </div>

          <div className={styles.col_contact}>
            <h3>Reach Out to us via</h3>

            <ul>
              <li>
                <span className={styles.contact_flag}>🇮🇳</span> +91 8208896517
              </li>
              <li>
                <span className={styles.contact_flag}>🇨🇳</span> +86 13538501419
              </li>
            </ul>

            <ul className={styles.droptext}>
              <h3>or drop a text on:</h3>

              <li className={styles.wechat_btn}>
                <img src="/icons/wechat.svg" alt="wechat logo" />
                WeChat
              </li>
              <li className={styles.whatsapp_btn} onClick={openWhatsAppHandler}>
                <img src="/icons/whatsapp.svg" alt="whatsapp logo" />
                WhatsApp
              </li>
            </ul>
          </div>

          <div className={styles.col_email}>
            <ul>
              <li>
                <h3>email</h3>
                <p>info@titc.co</p>
              </li>

              <li>
                <h3>address</h3>
                <p>
                  Office No. 403, Building 1, Guangda Rd N, 1st St, Dongcheng,
                  Dongguan, Guangdong, China.
                </p>
              </li>
              <li onClick={openMapLocationHandler}>
                view in map
                <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.lower_foot}>
        @2024 Thadani International Trading Co. Ltd All Right Reserved
      </div>
    </footer>
  );
};

export default FooterSection;
