"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const useQueryParam = (key: string) => {
  const router = useRouter();
  const params = useSearchParams();
  const value = params.get(key);

  const setValue = (val: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set(key, val);
    router.push(`?${newParams.toString()}`);
  };

  return [value, setValue] as const;
};
