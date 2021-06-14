import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

const Viewer = dynamic(() => import("components/templates/Viewer"), {
  ssr: false,
});

const Id: NextPage = () => <Viewer />;

export default Id;
