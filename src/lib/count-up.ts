export const COUNT_UP_DURATION = 1800;

export function parseCounter(value: string) {
  const match = /\d+(?:\.\d{3})*(?:,\d+)?/.exec(value);
  if (!match) return null;
  const numeric = match[0];
  return {
    target: Number(numeric.replaceAll(".", "").replace(",", ".")),
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + numeric.length),
    decimals: numeric.split(",")[1]?.length ?? 0,
  };
}

export function formatCounter(value: string, progress: number) {
  const parsed = parseCounter(value);
  if (!parsed || progress >= 1) return value;
  const eased = 1 - Math.pow(1 - Math.max(0, progress), 3);
  const number = parsed.target * eased;
  const formatted = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
  }).format(parsed.decimals ? number : Math.floor(number));
  return `${parsed.prefix}${formatted}${parsed.suffix}`;
}
