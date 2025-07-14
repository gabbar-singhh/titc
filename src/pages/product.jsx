import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import styles from "@/styles/Product.module.css";
import ServicesSectionRedefined from "@/Components/ServicesSectionRedefined/ServicesSectionRedefined";
import SmallCTASection from "@/Components/SmallCTASection/SmallCTASection";
import FooterSection from "@/Components/FooterSection/FooterSection";
import Link from "next/link";
import ContactUsSection from "@/Components/ContactUsSection/ContactUsSection";

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

  const WHATSAPP_CHANNEL =
    "https://whatsapp.com/channel/0029VbA9H97HLHQaPeRTsJ3E";
  return (
    <>
      <Head>
        <title>
          Products Categories To Import From China| Thadani International
          Trading
        </title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className={styles.main}>
        <div className={styles.herosection}>
          <div className={styles.herosectionConatiner}>
            <div className={styles.left}>
            <Fade direction="up" triggerOnce>
              <div className={styles.capsule}>
                <img src="/icons/boxes.svg" alt="briefcase business" />
                Product Categories
              </div>
            </Fade>
            <Fade direction="up" triggerOnce>
              <h1 className={styles.heroHeading}>with right products</h1>
            </Fade>
            <Fade direction="up" triggerOnce>
              <h1 className={styles.heroHeading}>we scale you to success.</h1>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p>
                Discover trusted, high-quality products sourced directly from
                China — tailored to your business needs, at competitive prices.
              </p>
            </Fade>
            <Fade direction="up" triggerOnce>
              <div onClick={openWhatsAppHandler} className={styles.cta}>
                Get in Touch on WhatsApp{" "}
                <img
                  src="/icons/arrow-up-right-new.svg"
                  alt="arrow upright icon"
                />
              </div>
            </Fade>
            </div>
            <div className={styles.right}>
               <img
            src="/img/hero-product.webp"
            alt="warehouse china"
            width={424}
            height={"auto"}
          />
            </div>

          </div>
        </div>

        <div className={styles.whatsappChannelCTA}>
          <div className={styles.whatsappChannelContainer}>
            <h3>
              We post trending and high potential products for new and existing
              business.
            </h3>
            <Link className={styles.whatsappChannelBtn} href="/">
              Join Our WhatsApp Channel
            </Link>
          </div>
        </div>

        <div className={styles.product_category}>
          <Fade triggerOnce delay={0.1}>
            <h2>
              explore our product database to <br /> find the right products for
              your business.
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
          head="Have a Product in Mind? We'll Source It for You"
          content="Share your requirements and we’ll find the best-quality product at the right price."
        />
        <ContactUsSection />
        <FooterSection />
      </section>
    </>
  );
};

export default product;
