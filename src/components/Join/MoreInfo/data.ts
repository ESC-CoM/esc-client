export const mbtiList = [
  'ENFP',
  'ENFJ',
  'ENTP',
  'ENTJ',
  'ESFP',
  'ESFJ',
  'ESTP',
  'ESTJ',
  'INFP',
  'INFJ',
  'INTP',
  'INTJ',
  'ISFP',
  'ISFJ',
  'ISTP',
  'ISTJ',
];

export const heightInfo = Array.from({ length: 10 }, (_, index) => {
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
