import { GetServerSideProps, NextPage } from "next";
import React from "react";
import dynamic from "next/dynamic";
import verifyIdToken from "libs/verifyIdToken";

const Landing = dynamic(() => import("components/templates/Landing"), {
  ssr: false,
});

export type PagesProps = {
  isSignedIn: boolean;
};

const Pages: NextPage<PagesProps> = ({ isSignedIn }: PagesProps) =>
  isSignedIn ? <div>サインイン</div> : <Landing />;

export type ServerSideProps = Pick<PagesProps, "isSignedIn">;

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  ctx
) => {
  try {
    await verifyIdToken(ctx);
  } catch {
    return {
      props: {
        isSignedIn: false,
      },
    };
  }

  return {
    props: {
      isSignedIn: true,
    },
  };
};

export default Pages;
