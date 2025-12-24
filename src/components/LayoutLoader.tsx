"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function LayoutLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setReady(true);
    }, 500);

    return () => clearTimeout(id);
  }, []);

  if (!ready) {
    return <Loading />;
  }

  return <>{children}</>;
}
