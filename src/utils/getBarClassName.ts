import { BarClassName, GetBarClassName } from 'src/types/setting';

const getBarClassName: GetBarClassName = (index, totalLength) => {
  const isSingle = totalLength === 1;
  const isFirst = index === 0;
  const isEnd = index === totalLength - 1;

  if (isSingle) return BarClassName.single;
  if (isFirst) return BarClassName.top;
  if (isEnd) return BarClassName.bottom;
  return BarClassName.middle;
};

export default getBarClassName;
