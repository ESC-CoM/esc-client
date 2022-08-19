export default function useAutoHeightChange(
  contentRef: React.MutableRefObject<HTMLTextAreaElement | null>
) {
  const textareaContent = contentRef.current;
  if (textareaContent) {
    textareaContent.style.height = 'auto';
    textareaContent.style.height = `${textareaContent.scrollHeight}px`;

    return textareaContent.scrollHeight;
  }
}
