import axios from "axios";
import nookies from "nookies";
import admin from "libs/admin";

export type VerifyIdTokenParams = Parameters<typeof nookies.get>[0] &
  Parameters<typeof nookies.set>[0];

export type VerifyIdTokenData = {
  email?: string;
  uid: string;
};

const verifyIdToken = async (
  ctx: VerifyIdTokenParams
): Promise<{ data: VerifyIdTokenData } | { error: Error }> => {
  let email: string;
  let uid = "";

  const { id_token: idToken, refresh_token: refreshToken } = nookies.get(ctx);

  try {
    const { email: tmpEmail, uid: tmpUid } = await admin
      .auth()
      .verifyIdToken(idToken);

    email = tmpEmail;
    uid = tmpUid;
  } catch (error) {
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY || !refreshToken) {
      return { error };
    }

    try {
      const {
        data: { id_token: idToken, user_id: userId },
      } = await axios.post(
        `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
        {
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }
      );

      uid = userId;

      const { email: tmpEmail } = await admin.auth().verifyIdToken(idToken);

      email = tmpEmail;

      nookies.set(ctx, "id_token", idToken, {
        path: "/",
      });
    } catch (error) {
      return { error };
    }
  }

  return {
    data: {
      email,
      uid,
    },
  };
};

export default verifyIdToken;
