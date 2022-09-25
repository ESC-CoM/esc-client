const autosizeTextArea = (textAreaRef: HTMLTextAreaElement | null) => {
  if (textAreaRef) {
    textAreaRef.style.height = '0px';
    const scrollHeight = textAreaRef.scrollHeight;
    textAreaRef.style.height = scrollHeight + 'px';
  }
};

export default autosizeTextArea;
