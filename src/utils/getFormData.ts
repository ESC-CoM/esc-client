const getFormData = (files: FileList) => {
  const formData = new FormData();
  const file = files[0];
  if (file) {
    formData.append('image', file);
  }
  return formData;
};
export default getFormData;
