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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Thadani International Trading",
    "url": "https://www.thadaniinternationaltrading.com/",
    "logo": "https://thadaniinternationaltrading.com/logo.png",
    "description": "We source quality goods from China and ship them to your country.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 8208896517",
      "contactType": "Customer Service"
    }
  };
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
