import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

const Viewer = dynamic(() => import("components/templates/Viewer"), {
  ssr: false,
});

const Id: NextPage = () => <Viewer />;

export default Id;
