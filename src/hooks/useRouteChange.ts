"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type RouteChangeHandlers = {
  onStart?: (url: string) => void;
  onComplete?: (url: string) => void;
};

export function useRouteChange({ onStart, onComplete }: RouteChangeHandlers) {
  const router = useRouter();
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPath.current) {
      onStart?.(pathname);
      prevPath.current = pathname;
    }
  }, [pathname, onStart]);

  useEffect(() => {
    if (!onComplete) return;
    const timeout = setTimeout(() => {
      onComplete(pathname);
    }, 100);
    return clearTimeout(timeout);
  }, [pathname, onComplete]);
}
