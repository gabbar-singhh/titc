import "@/styles/globals.css";
import { Inter, Shadows_Into_Light } from "next/font/google";
import NavigationBar from "@/Components/NavigationBar/NavigationBar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });
const shadowIntoLight = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <NavigationBar />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
