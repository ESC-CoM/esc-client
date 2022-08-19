import { ChangeEvent, memo, useCallback, useRef, useState } from 'react';
import $ from './style.module.scss';
// import ContentBox from 'src/components/ContentBox';
import useAutoHeightChange from 'src/hooks/useAutoHeightChange';
import { IoSend, IoImages } from 'react-icons/io5';

interface Props {
  setAlbums: React.Dispatch<React.SetStateAction<FileList | null | undefined>>;
}

export function MessageInput({ setAlbums }: Props) {
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

  const loadAlbum = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files);
    setAlbums(e.currentTarget.files);
  };

  return (
    <div className={$['message-input-box']} ref={parentRef}>
      <label htmlFor="file">
        <div className={$['img-btn']}>
          <IoImages />
        </div>
      </label>
      <input type="file" name="file" id="file" multiple onChange={loadAlbum} />

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
