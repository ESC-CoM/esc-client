import $ from './style.module.scss';

interface Props {
  contents: string[];
  fontSize?: number;
}

export default function ParagraphList({ contents, fontSize }: Props) {
  return (
    <div className={$['paragraph-list']}>
      {contents.map((content, index) => (
        <p key={content + index} className={$.content} style={{ fontSize }}>
          {content}
        </p>
      ))}
    </div>
  );
}
