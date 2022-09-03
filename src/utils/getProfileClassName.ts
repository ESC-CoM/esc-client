const getProfileClassName = (profileLen: number) => {
  if (profileLen === 1) return 'single';
  if (profileLen === 2) return 'double';
  return 'triple';
};

export default getProfileClassName;
