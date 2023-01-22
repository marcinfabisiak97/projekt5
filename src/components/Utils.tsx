export const removeSpaces = (value: string): string => {
  return value.replace(/\s/g, "");
};
export const copy = async (value: string) => {
  await navigator.clipboard.writeText(value);
};
