import React from "react";
import styles from "./FooterSection.module.css";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.upper_foot}>
        <div className={styles.upper_container}>
          <Link href={"/"}>
            <img
              src={"/img/logo_footer.png"}
              className={styles.logo_img}
              alt="tit logo"
            />
          </Link>

          <ul>
            <li>
              <Link href={"/"}>
                <img src="/icons/instagram.svg" alt="instagram logo" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <img src="/icons/facebook.svg" alt="facebook logo" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <img src="/icons/linkedin.svg" alt="linkedin logo" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <img src="/icons/tiktok.svg" alt="tiktok logo" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.lower_foot}>
        @2024 Thadani International Trading Co. Ltd All Right Reserved
      </div>
    </footer>
  );
};

export default FooterSection;
