import { useCallback, useMemo } from 'react';

export default function useLimitedText(
  text: string,
  width: number,
  startLength: number
) {
  const useComparedNumber = useCallback(
    (start) => {
      if (width > 750) return start + 40;
      if (width > 650) return start + 32;
      if (width > 550) return start + 24;
      if (width > 450) return start + 16;
      if (width > 350) return start + 8;
      return start;
    },
    [width]
  );

  const limitedText = useMemo(() => {
    const comparedNumber = useComparedNumber(startLength);
    if (text.length <= comparedNumber) return text;
    return `${text.slice(0, comparedNumber)}...`;
  }, [width, text]);

  return limitedText;
}
