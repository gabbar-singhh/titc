import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/Components/HeroSection/HeroSection";
import CompareSection from "@/Components/CompareSection/CompareSection";
import ServicesSection from "@/Components/ServicesSection/ServicesSection";
import Timeline from "@/Components/Timeline/Timeline";
import StatsSection from "@/Components/StatsSection/StatsSection";
import ContactUsSection from "@/Components/ContactUsSection/ContactUsSection";
import FooterSection from "@/Components/FooterSection/FooterSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Source Quality Products From China | Thadani International Trading</title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className={`${styles.main}`}>
        <HeroSection />
        <CompareSection />
        <ServicesSection />
        <Timeline />
        <StatsSection />
        <ContactUsSection />
        <FooterSection />
      </section>
    </>
  );
}
