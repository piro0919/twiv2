import "firebase/auth";
import { destroyCookie, setCookie } from "nookies";
import { useEffect, useState } from "react";
import firebase from "libs/firebase";

export type AuthData = {
  user: {
    email: string;
    name: string;
    photoUrl: string;
    uid: string;
  };
};

const useAuth = (): AuthData => {
  const [user, setUser] = useState<AuthData["user"]>({
    email: "",
    name: "",
    photoUrl: "",
    uid: "",
  });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        const { displayName, email, photoURL, refreshToken, uid } = user;

        setCookie(null, "id_token", idToken, {
          path: "/",
        });

        setCookie(null, "refresh_token", refreshToken, {
          path: "/",
        });

        setUser({
          email: email || "",
          name: displayName || "",
          photoUrl: photoURL || "",
          uid: uid || "",
        });

        return;
      }

      destroyCookie(null, "id_token");

      destroyCookie(null, "refresh_token");

      setUser({
        email: "",
        name: "",
        photoUrl: "",
        uid: "",
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { user };
};

export default useAuth;
