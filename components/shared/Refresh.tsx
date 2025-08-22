"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RefreshHandler() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    window.location.href = pathname;
  }, [pathname]);

  return null; 
}
