import { NextPage } from "next";
import React from "react";
import dynamic from "next/dynamic";

const Landing = dynamic(() => import("components/templates/Landing"), {
  ssr: false,
});

const Pages: NextPage = () => <Landing />;

export default Pages;
