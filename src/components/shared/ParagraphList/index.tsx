import $ from './style.module.scss';

interface Props {
  contents: string[];
}

export default function ParagraphList({ contents }: Props) {
  return (
    <div className={$['paragraph-list']}>
      {contents.map((content, index) => (
        <p key={content + index} className={$.content}>
          {content}
        </p>
      ))}
    </div>
  );
}
