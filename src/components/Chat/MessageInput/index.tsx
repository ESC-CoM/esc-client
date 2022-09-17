import { ChangeEvent, memo, useCallback, useRef, useState } from 'react';
import $ from './style.module.scss';
import { IoSend, IoImages } from 'react-icons/io5';
import autosizeTextArea from 'src/utils/autosizeTextArea';

interface Props {
  setAlbums: React.Dispatch<React.SetStateAction<FileList | null | undefined>>;
}

export function MessageInput({ setAlbums }: Props) {
  const [newContent, setNewContent] = useState('');
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const handleContentChange = useCallback((e) => {
    const value = e.target?.value;
    setNewContent(value);

    const DivElement = parentRef.current;
    const textareaElement = contentRef.current;
    if (DivElement && textareaElement && textareaElement?.scrollHeight <= 96) {
      const scrollHeight = autosizeTextArea(contentRef.current);

      if (scrollHeight) {
        DivElement.style.height = '0px';
        DivElement.style.height = `${scrollHeight + 26}px`;
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
        <IoImages className={$['img-btn']} />
      </label>
      <input type="file" name="file" id="file" multiple onChange={loadAlbum} />

      <div className={$['textarea-wrapper']}>
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
