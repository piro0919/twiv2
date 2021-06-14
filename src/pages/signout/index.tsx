import "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import UserContext from "contexts/UserContext";
import firebase from "libs/firebase";

const Signout: NextPage = () => {
  const {
    user: { uid },
  } = useContext(UserContext);
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
