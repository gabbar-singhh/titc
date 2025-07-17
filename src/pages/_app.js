import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "@/Components/NavigationBar/NavigationBar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Script from "next/script"; // ✅ import Script

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* ✅ Google Tag Manager Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5933LCBL');
        `}
      </Script>

      <Theme>
        <main className={inter.className}>
          <NavigationBar />
          <Component {...pageProps} />
        </main>
      </Theme>
    </>
  );
}
