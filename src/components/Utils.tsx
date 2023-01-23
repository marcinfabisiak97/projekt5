export const removeSpaces = (value: string): string => {
  return value.replace(/\s/g, "");
};
export const copy = (value: string) => {
  navigator.clipboard.writeText(value);
};
