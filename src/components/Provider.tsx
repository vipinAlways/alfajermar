"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loading from "./Loading";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  useEffect(() => {
    const lenis = new Lenis();
    const update = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    lenis.on("scroll", () => {});

    requestAnimationFrame(update);
    return () => lenis.destroy();
  },[]);

  if (!mounted) return <Loading/>;
  return <>{children}</>;
}
