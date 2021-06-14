import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC, useEffect } from "react";
import { setConfiguration } from "react-grid-system";
import useAuth from "./hooks/useAuth";
import UserContext from "contexts/UserContext";
import "ress";
import "../../styles/global.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { user } = useAuth();

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
      <UserContext.Provider value={{ user }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
};

export default MyApp;
