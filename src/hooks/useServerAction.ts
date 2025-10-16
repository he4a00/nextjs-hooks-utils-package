"use client";
import { useState, useCallback } from "react";

export function useServerAction<T extends (...args: any[]) => Promise<any>>(
  action: T
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const runAction = useCallback(
    async (...args: Parameters<T>) => {
      setLoading(true);
      setError(null);
      try {
        await action(...args);
      } catch (err: any) {
        console.error("Server action failed:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [action]
  );

  return { runAction, loading, error };
}
