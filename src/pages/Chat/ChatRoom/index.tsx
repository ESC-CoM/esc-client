import { PageLayout } from 'src/components/Layout';
import $ from './style.module.scss';
import cx from 'classnames';
import { Message, ProfileImage, MessageInput } from 'src/components/Chat';
import { messageInfoMocks } from 'src/__mocks__/chat';

export default function ChatRoomPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <section className={$['chat-content']}>
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
                  <ProfileImage altValue={name} imagePath={imagePath} />
                </span>
              )}
              <Message id={id} name={name} content={content} />

              <time className={$.date} dateTime={date}>
                {date}
              </time>
            </div>
          );
        })}
      </section>
      <div className={$['msg-input']}>
        <MessageInput />
      </div>
    </PageLayout>
  );
}
