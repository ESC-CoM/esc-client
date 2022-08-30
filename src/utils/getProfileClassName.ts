const getProfileClassName = (profileLen: number) => {
  if (profileLen === 2) return 'double';
  else if (profileLen === 3) return 'triple';
  return 'single';
};

export default getProfileClassName;
