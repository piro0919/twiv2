import { AppProps } from "next/app";
import React, { FC, useEffect } from "react";
import "ress";
import Head from "next/head";
import "../../styles/global.scss";
import { setConfiguration } from "react-grid-system";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    setConfiguration({ breakpoints: [375, 740, 980, 1300] });
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap&text=Twiv"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
