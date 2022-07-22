import { useDateFormat } from 'src/hooks';
import $ from './style.module.scss';

type Props = {
  imageURL: string;
  title: string;
  content: string;
  date: string;
};

export default function NoticeCard({ imageURL, title, content, date }: Props) {
  const dateFormat = useDateFormat(date);

  return (
    <div className={$.card}>
      <div className={$['left-box']}>
        <img
          className={$['profile-image']}
          src={imageURL}
          alt="profile image"
        />
        <div className={$['text-box']}>
          <h1 className={$.title}>{title}</h1>
          <span className={$.content}>{content}</span>
        </div>
      </div>
      <span className={$.date}>{dateFormat}</span>
    </div>
  );
}
