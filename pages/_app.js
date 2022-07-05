import "../styles/globals.css";
import Header from "../componant/Header";
import { Box } from "@chakra-ui/react";
import { LanguageContextProvider } from "../context/languageContext";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../componant/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Head>
      <LanguageContextProvider>
        <ChakraProvider>
          <Box w="100%" h={["50px", "70px"]} />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </LanguageContextProvider>
    </>
  );
}

export default MyApp;
