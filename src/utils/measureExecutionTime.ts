export function measureExecutionTime(fn: Function): number {
  const start = performance.now();
  fn();
  return performance.now() - start;
}
