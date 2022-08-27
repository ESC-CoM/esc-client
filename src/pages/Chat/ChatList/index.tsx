import { PageLayout } from 'src/components/shared/Layout';
import { ChatList } from 'src/components/Chat';
import { chatListMocks } from 'src/__mocks__/chat';

export default function ChatListPage() {
  return (
    <PageLayout isNeedFooter={true}>
      <ul>
        {chatListMocks.map(
          ({ roomImage, title, content, time, count }, index) => (
            <ChatList
              key={title + index}
              {...{ roomImage, title, content, time, count }}
            />
          )
        )}
      </ul>
    </PageLayout>
  );
}
