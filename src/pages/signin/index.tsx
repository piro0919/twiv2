import { NextPage } from "next";
import React, { useMemo } from "react";
import firebase from "libs/firebase";
import "firebase/auth";
import SignIn, { SignInProps } from "components/templates/SignIn";

const Pages: NextPage = () => {
  const firebaseAuth = useMemo<SignInProps["firebaseAuth"]>(
    () => firebase.auth(),
    []
  );
  const uiConfig = useMemo<SignInProps["uiConfig"]>(
    () => ({
      signInFlow: "redirect",
      signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
      signInSuccessUrl: "/",
      siteName: "Twiv",
    }),
    []
  );

  return <SignIn firebaseAuth={firebaseAuth} uiConfig={uiConfig} />;
};

export default Pages;
