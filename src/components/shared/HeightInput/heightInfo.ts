const heightInfo = Array.from({ length: 10 }, (_, index) => {
  if (!index)
    return {
      value: 145,
      label: '150cm 이하',
    };
  if (index === 9)
    return {
      value: 190,
      label: '190cm 이상',
    };
  return {
    value: 145 + 5 * index,
    label: `${145 + 5 * index}cm ~ ${145 + 5 * (index + 1)}cm`,
  };
});

export default heightInfo;
