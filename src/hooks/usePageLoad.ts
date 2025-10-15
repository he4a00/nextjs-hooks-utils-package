"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export const usePageLoad = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    let timer: ReturnType<typeof setTimeout>;
    startTransition(() => {
      timer = setTimeout(() => setLoading(false), 500);
    });
    return () => clearTimeout(timer);
  }, [pathname]);

  return loading || isPending;
};
