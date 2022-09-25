import Search from 'src/components/shared/Search';
import SelectBox from 'src/components/shared/SelectBox';
import { DefaultData } from 'src/types/props';

import $ from './style.module.scss';

type Props = {
  data: DefaultData[];
};

function MeetingHeader(headerProps: Props) {
  const { data } = headerProps;
  return (
    <div className={$['meeting-header']}>
      <SelectBox
        options={data}
        selected={'gwating'}
        name={'meeting-kind'}
        className={$['meeting-select']}
      />
      <Search
        onSearchClick={(value: string) => console.log(value)}
        className={$['search-bar']}
      />
    </div>
  );
}

export default MeetingHeader;
