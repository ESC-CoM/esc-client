import { PageLayout } from 'src/components/Layout';
import $ from './style.module.scss';
import cx from 'classnames';
import { Message, ProfileImage } from 'src/components/Chat';
import { messageInfo } from 'src/__mocks__/chat';

export default function ChatRoomPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={54}>
      {messageInfo.map(({ sender, content, date }) => (
        <div
          key={sender + date}
          className={cx(
            $['msg-content'],
            $[sender.id === 'loginid' ? 'me' : 'other']
          )}
        >
          {sender.id === 'other' && (
            <span className={$['friend-image']}>
              <ProfileImage imagePath={sender.imagePath} />
            </span>
          )}

          <Message sender={sender.id} content={content} date={date} />

          <time className={$.date} dateTime={date}>
            {date}
          </time>
        </div>
      ))}
    </PageLayout>
  );
}
