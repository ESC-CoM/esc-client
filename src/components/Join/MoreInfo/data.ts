export const weightInfo = Array.from({ length: 12 }, (_, index) => {
  if (!index)
    return {
      value: 35,
      label: '40kg 이하',
    };
  if (index === 11)
    return {
      value: 90,
      label: '90kg 이상',
    };
  return {
    value: 35 + 5 * index,
    label: `${35 + 5 * index}kg ~ ${35 + 5 * (index + 1)}kg`,
  };
});
