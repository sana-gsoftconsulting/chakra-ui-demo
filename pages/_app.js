import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../utils/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300&display=swap"
          rel="stylesheet"
        />
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
