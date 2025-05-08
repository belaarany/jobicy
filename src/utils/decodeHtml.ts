import { decode } from "he";

export const decodeHtml = (html: string): string => {
  // Double decode to handle cases like "hims &amp;#038; hers"
  return decode(decode(html));
};
