import { chatListMocks } from '@mocks/data/chat';
import { ChatList } from 'src/components/Chat';
import { PageLayout } from 'src/components/shared/Layout';

export default function ChatPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <ul>
        {chatListMocks.map(
          ({ id, roomImage, title, content, time, count }, index) => (
            <ChatList
              key={title + index}
              {...{ id, roomImage, title, content, time, count }}
            />
          )
        )}
      </ul>
    </PageLayout>
  );
}
