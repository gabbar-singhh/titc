import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/Components/HeroSection/HeroSection";
import CompareSection from "@/Components/CompareSection/CompareSection";
import ServicesSection from "@/Components/ServicesSection/ServicesSection";
import Timeline from "@/Components/Timeline/Timeline";
import ContactUsSection from "@/Components/ContactUsSection/ContactUsSection";
import FooterSection from "@/Components/FooterSection/FooterSection";
import ReelSection from "@/Components/Reels/ReelSection";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Thadani International Trading",
    url: "https://www.thadaniinternationaltrading.com/",
    logo: "https://thadaniinternationaltrading.com/logo.png",
    description:
      "We source quality goods from China and ship them to your country.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "918805523442",
      contactType: "Customer Service",
    },
  };
  return (
    <>
      <Head>
        <title>
          Source Quality Products From China | Thadani International Trading
        </title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>

      <section className={`${styles.main}`}>
        <HeroSection />
        <CompareSection />
        <ServicesSection />
        <Timeline />
        <ReelSection />
        <ContactUsSection />
        <FooterSection />
      </section>
    </>
  );
}
