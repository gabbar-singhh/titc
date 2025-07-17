import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "@/Components/NavigationBar/NavigationBar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <main className={inter.className}>
          <NavigationBar />
          <Component {...pageProps} />
        </main>
      </Theme>
    </>
  );
}
