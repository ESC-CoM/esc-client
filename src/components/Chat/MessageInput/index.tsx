import { memo, useCallback, useRef, useState } from 'react';
import $ from './style.module.scss';
// import ContentBox from 'src/components/ContentBox';
import useAutoHeightChange from 'src/hooks/useAutoHeightChange';
import { IoSend, IoImages } from 'react-icons/io5';

export function MessageInput() {
  const [newContent, setNewContent] = useState('');
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const handleContentChange = useCallback(() => {
    const textareaRef = contentRef.current;
    const DivContent = parentRef.current;
    if (textareaRef && DivContent) {
      if (textareaRef.scrollHeight <= 100) {
        const scrollHeight = useAutoHeightChange(contentRef);

        if (scrollHeight) {
          DivContent.style.height = 'auto';
          DivContent.style.height = `${scrollHeight + 12}px`;
        }
      }
    }
  }, []);

  return (
    <div className={$['message-input-box']} ref={parentRef}>
      <div className={$['img-btn']}>
        <button type="button">
          <IoImages />
        </button>
      </div>
      <div className={$.text}>
        <textarea
          name="message"
          id=""
          defaultValue={newContent}
          placeholder="메세지 보내기..."
          ref={contentRef}
          onChange={handleContentChange}
          autoFocus
        />
      </div>
      <button type="submit">
        <IoSend />
      </button>
    </div>
  );
}

export default memo(MessageInput);
