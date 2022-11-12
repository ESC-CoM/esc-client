import { ChangeEvent, memo, useCallback, useRef, useState } from 'react';
import { IoImages } from '@react-icons/all-files/io5/IoImages';
import { IoSend } from '@react-icons/all-files/io5/IoSend';
import autosizeTextArea from 'src/utils/autosizeTextArea';

import $ from './style.module.scss';

interface Props {
  setAlbums: React.Dispatch<React.SetStateAction<FileList | null | undefined>>;
  onSendMessage: (message: string) => void;
}

export function MessageInput({ setAlbums, onSendMessage }: Props) {
  const [newContent, setNewContent] = useState('');
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleContentChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      setNewContent(value);
      const textareaElement = contentRef.current;
      if (!textareaElement) return;
      const isMaxHeight = textareaElement.scrollHeight > 96;
      if (isMaxHeight) return;
      autosizeTextArea(textareaElement);
    },
    []
  );

  const loadAlbum = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files);
    setAlbums(e.currentTarget.files);
  };

  const onClickSendBtn = () => {
    onSendMessage(newContent);
  };

  return (
    <div className={$['message-input-box']}>
      <label htmlFor="file">
        <IoImages className={$['img-btn']} />
      </label>
      <input type="file" name="file" id="file" multiple onChange={loadAlbum} />
      <textarea
        name="message"
        defaultValue={newContent}
        placeholder="메세지 보내기..."
        ref={contentRef}
        onChange={handleContentChange}
        autoFocus
      />
      <button type="submit" onClick={onClickSendBtn}>
        <IoSend color={newContent ? 'black' : '#9e9e9e'} />
      </button>
    </div>
  );
}

export default memo(MessageInput);
