const autosizeTextArea = (textAreaRef: HTMLTextAreaElement | null) => {
  if (textAreaRef) {
    textAreaRef.style.height = '0px';
    const scrollHeight = textAreaRef.scrollHeight + 4;
    textAreaRef.style.height = scrollHeight + 'px';
    return scrollHeight;
  }
};

export default autosizeTextArea;
