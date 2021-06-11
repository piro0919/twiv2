import "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useAuth from "hooks/useAuth";
import firebase from "libs/firebase";

const Signout: NextPage = () => {
  const {
    user: { uid },
  } = useAuth();
  const [isSignedOut, setIsSignedOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const callback = async () => {
      await firebase.auth().signOut();

      setIsSignedOut(true);
    };

    callback();
  }, []);

  useEffect(() => {
    if (!isSignedOut || uid) {
      return;
    }

    router.push("/");
  }, [router, isSignedOut, uid]);

  return null;
};

export default Signout;
