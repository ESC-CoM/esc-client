import { PageLayout } from 'src/components/Layout';
import { friendMocks } from 'src/__mocks__/friendMocks';
import $ from './style.module.scss';
import Search from 'src/components/Search';
import Friend from 'src/components/Friend';

export default function Friends() {
  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['search-box']}>
        <Search />
      </div>
      <ul>
        {friendMocks.map(({ src, name }, index) => (
          <li key={`${name}${index}`} className={$['friend-bar']}>
            <Friend
              {...{ src, name }}
              isVertical={false}
              padding={10}
              paddingLeft={10}
            />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
