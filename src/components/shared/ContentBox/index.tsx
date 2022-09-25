import { ChangeEvent, memo, useCallback, useRef, useState } from 'react';
import useDebounceInput from 'src/hooks/useDebounceInput';

import $ from './style.module.scss';
import autosizeTextArea from 'src/utils/autosizeTextArea';

interface Props {
  title: string;
  content?: string;
  isReadMode?: boolean;
  contentTitle?: string;
}

function ContentBox({ title, content, isReadMode, contentTitle }: Props) {
  const [newContent, setNewContent] = useState('');
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const handleContent = useDebounceInput<string>(setNewContent);

  const handleContentChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      handleContent(e.target.value);
      if (contentRef.current) autosizeTextArea(contentRef.current);
    },
    []
  );

  return (
    <section className={$['content-box']}>
      {isReadMode ? (
        <div style={{ minHeight: '200px' }}>
          <h2>{title}</h2>
          {content && <span>{content}</span>}
        </div>
      ) : (
        <div className={$['textarea-box']}>
          <h2>{contentTitle}</h2>
          <textarea
            defaultValue={newContent}
            placeholder="내용을 입력해주세요."
            ref={contentRef}
            onChange={handleContentChange}
          />
        </div>
      )}
    </section>
  );
}

export default memo(ContentBox);
