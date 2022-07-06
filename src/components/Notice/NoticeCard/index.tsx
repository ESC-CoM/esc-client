import { useDateFormat, useLimitedText, useWindowResize } from 'src/hooks';
import $ from './style.module.scss';

type Props = {
  imageURL: string;
  title: string;
  content: string;
  date: string;
};

export default function NoticeCard({ imageURL, title, content, date }: Props) {
  const [width, _] = useWindowResize();
  const dateFormat = useDateFormat(date);
  const limitedTitle = useLimitedText(title, width, 3);
  const limitedContent = useLimitedText(content, width, 12);

  return (
    <div className={$.card}>
      <div className={$['left-box']}>
        <img
          className={$['profile-image']}
          src={imageURL}
          alt="profile image"
        />
        <div className={$['text-box']}>
          <h1 className={$.title}>{limitedTitle}</h1>
          <span className={$.content}>{limitedContent}</span>
        </div>
      </div>
      <span className={$.date}>{dateFormat}</span>
    </div>
  );
}
