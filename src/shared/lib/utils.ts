import { memo } from 'react';

export const genericMemo: <T>(component: T) => T = memo;

export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export const getNoun = (number: number, one: string, two: string, three: string) => {
  let num = Math.abs(number);
  num %= 100;
  if (num >= 5 && num <= 20) {
    return three;
  }
  num %= 10;
  if (num === 1) {
    return one;
  }
  if (num >= 2 && num <= 4) {
    return two;
  }

  return three;
};
