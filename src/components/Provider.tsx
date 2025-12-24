"use client";

import {  useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();
    const update = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    lenis.on("scroll", () => {});

    requestAnimationFrame(update);
    return () => lenis.destroy();
  });

  return <>{children}</>;
}
