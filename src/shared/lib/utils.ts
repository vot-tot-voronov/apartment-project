import { memo } from 'react';

export const genericMemo: <T>(component: T) => T = memo;

export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};
