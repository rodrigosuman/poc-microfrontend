"use client";
// @ts-ignore
import { App as VitePage } from "http://localhost:8088/remoteEntry.js";
// @ts-ignore

import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { useEffect } from "react";

export default function Index() {
  // return <VitePage />

  useEffect(() => {
    confetti();
  }, []);

  console.log(VitePage);

  return <><VitePage /></>;
}
