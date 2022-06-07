import { PageLayout } from 'src/components/Layout';
import $ from './style.module.scss';
import cx from 'classnames';
import { Message, ProfileImage } from 'src/components/Chat';
import { messageInfoMocks } from 'src/__mocks__/chat';

export default function ChatRoomPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={54}>
      {messageInfoMocks.map(({ sender, content, date }, index) => {
        const { id, name, imagePath } = sender;
        return (
          <div
            key={sender + date + index}
            className={cx(
              $['msg-content'],
              $[sender.id === 'loginid' ? 'me' : 'other']
            )}
          >
            {sender.id === 'other' && (
              <span className={$['friend-image']}>
                <ProfileImage imagePath={imagePath} />
              </span>
            )}
            <Message id={id} name={name} content={content} />

            <time className={$.date} dateTime={date}>
              {date}
            </time>
          </div>
        );
      })}
    </PageLayout>
  );
}
