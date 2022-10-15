const readFileAsURL = (file: File, setValue: (url: string) => void) => {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ({ target }) => {
    if (!target) return;
    const { result } = target;
    if (typeof result !== 'string') return;
    setValue(result);
  };
  reader.readAsDataURL(file);
};

export default readFileAsURL;
