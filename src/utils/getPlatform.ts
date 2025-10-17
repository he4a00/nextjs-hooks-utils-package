export function getPlatform() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipad/.test(userAgent)) return "mobile";
  if (/windows/.test(userAgent)) return "windows";
  if (/mac/.test(userAgent)) return "mac";
  if (/linux/.test(userAgent)) return "linux";
  return "unknown";
}
