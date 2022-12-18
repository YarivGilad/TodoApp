export function shortID(len = 5): string {
  const offset = 2;
  return Math.random()
    .toString(36)
    .slice(offset, len + offset);
}
