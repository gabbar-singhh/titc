import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import styles from "@/styles/Product.module.css";
import ServicesSectionRedefined from "@/Components/ServicesSectionRedefined/ServicesSectionRedefined";
import SmallCTASection from "@/Components/SmallCTASection/SmallCTASection";
import FooterSection from "@/Components/FooterSection/FooterSection";

const product = () => {
 
  const openWhatsAppHandler = () => {
    const phoneNumber = "8613538501419";
    const message = encodeURIComponent(
      "Hello Kayyush, I visited your website and I'd be interested to know more!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
};

  const productCategoryName = [
    "Apparel",
    "Furniture",
    "Bags & Cases",
    "Beauty",
    "Toys",
    "Sports",
    "Home Supplies",
    "Garden & Tools",
    "Electronics",
    "Pet Supplies",
    "Mother & Kids",
    "Hardware",
    "Office Supplies",
    "Automotive",
    "Adult Products",
    "Industrial",
    "Packaging",
    "Outdoors",
    "Jewelry",
    "Lighting",
  ];
  return (
    <>
      <Head>
        <title>Products Categories To Import From China| Thadani International Trading</title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className={styles.main}>
        <div className={styles.hero_product}>
          <div className={styles.product_container}>
            <div className={styles.leftSide}>
              <Fade direction="up" triggerOnce>
                <p>product categories</p>
              </Fade>

              <Fade direction="up" triggerOnce>
                <h1>
                  With right products <br /> we scale you to success
                </h1>
              </Fade>

              <Fade direction="up" triggerOnce>
                <div onClick={openWhatsAppHandler} className={styles.cta}>
                  Get in Touch on WhatsApp
                  <img
                    src="/icons/arrow_up_right.svg"
                    alt="arrow upright icon"
                  />
                </div>
              </Fade>
            </div>
            <section className={styles.rightSide}>
              <div>
                <img src="/img/montage/1.webp" alt="white cup in yellow bg" />
              </div>

              <div>
                <img src="/img/montage/2.webp" alt="Alt text for the image" />
              </div>

              <div>
                <img src="/img/montage/5.webp" alt="china woman yellow dress" />
              </div>

              <div aria-hidden="true"></div>

              <div>
                <img src="/img/montage/6.webp" alt="Alt text for the image" />
              </div>

              <div aria-hidden="true"></div>

              <div>
                <img src="/img/montage/8.webp" alt="Alt text for the image" />
              </div>

              <div aria-hidden="true"></div>
              <div aria-hidden="true"></div>

              <div>
                <img src="/img/montage/3.webp" alt="Alt text for the image" />
              </div>

              <div>
                <img
                  src="/img/montage/4.webp"
                  alt="brown package in white bg"
                />
              </div>

              <div>
                <img src="/img/montage/7.webp" alt="Alt text for the image" />
              </div>
            </section>
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
        </div>

        <div className={styles.product_category}>
          <Fade triggerOnce delay={0.1}>
            <h2>
              explore our product database to find the perfect <br /> items for
              your business
            </h2>
          </Fade>

          <span>
            <div className={styles.grid_container}>
              <Fade triggerOnce>
                {productCategoryName.map((category, index) => (
                  <div key={index} className={styles.category_box}>
                    <img
                      src={`/icons/productCategory/product_category_${
                        index + 1
                      }.svg`}
                      alt={category}
                    />
                    <h1>{category}</h1>
                  </div>
                ))}
              </Fade>
            </div>
          </span>
        </div>

        <ServicesSectionRedefined />
        <SmallCTASection
          head="Have a product in mind?"
          content="let's get going then."
        />
        <FooterSection />
      </section>
    </>
  );
};

export default product;
