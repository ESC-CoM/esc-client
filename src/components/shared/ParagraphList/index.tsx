import cx from 'classnames';

import $ from './style.module.scss';

interface Props {
  className?: string;
  contents: string[];
  fontSize?: number;
}

export default function ParagraphList({
  className,
  contents,
  fontSize,
}: Props) {
  return (
    <div className={cx($['paragraph-list'], className)}>
      {contents.map((content, index) => (
        <p key={content + index} className={$.content} style={{ fontSize }}>
          {content}
        </p>
      ))}
    </div>
  );
}
