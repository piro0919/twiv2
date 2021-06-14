import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import verifyIdToken from "libs/verifyIdToken";

const Bookshelf = dynamic(() => import("components/templates/Bookshelf"), {
  ssr: false,
});

const Landing = dynamic(() => import("components/templates/Landing"), {
  ssr: false,
});

export type PagesProps = {
  isSignedIn: boolean;
};

const Pages: NextPage<PagesProps> = ({ isSignedIn }: PagesProps) =>
  isSignedIn ? <Bookshelf /> : <Landing />;

export type ServerSideProps = Pick<PagesProps, "isSignedIn">;

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  ctx
) => {
  const result = await verifyIdToken(ctx);

  if ("error" in result) {
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
