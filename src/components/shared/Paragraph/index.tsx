import $ from './style.module.scss';

interface Props {
  contents: string[];
}

export default function Paragraph({ contents }: Props) {
  return (
    <div className={$.paragraph}>
      {contents.map((content, index) => (
        <p key={content + index} className={$.content}>
          {content}
        </p>
      ))}
    </div>
  );
}
