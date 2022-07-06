import { useMemo } from 'react';

export default function useDateFormat(date: string) {
  const dateFormat = useMemo(() => {
    const [datePart, timePart] = date.split('T');
    const month = datePart.slice(5, 7).replace(/^0/, '');
    const day = datePart.slice(8).replace(/^0/, '');
    const minutes = timePart.split(':')[1];
    let hours = parseInt(timePart.split(':')[0], 10);
    let amPm = '오전';
    if (hours > 12) {
      hours -= 12;
      amPm = '오후';
    }
    if (hours === 0) hours = 12;
    const dateFormat = `${month}월 ${day}일 ${amPm} ${hours}:${minutes}`;
    return dateFormat;
  }, []);

  return dateFormat;
}
