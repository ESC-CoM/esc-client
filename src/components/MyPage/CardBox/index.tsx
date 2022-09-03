import MyInformationCard from '../MyInfomationCard';
import $ from './style.module.scss';
import { Menu } from 'src/types/setting';
import SettingBox from 'src/components/shared/SettingBox';

const SETTING_MENU: Menu[] = [
  {
    title: '계정 정보',
    items: [
      {
        type: 'link',
        text: '기본 정보 수정',
        to: './',
      },
      {
        type: 'link',
        text: '학사 정부 수정',
        to: './',
      },
    ],
  },
  {
    title: '기타',
    items: [
      {
        type: 'link',
        text: '친구 초대',
        to: './',
      },
    ],
  },
];

export default function CardBox() {
  return (
    <div className={$.container}>
      <section>
        <h2 className={$['card-title']}>기본 프로필</h2>
        <MyInformationCard className={$.card} />
      </section>
      <section>
        <SettingBox className={''} menu={SETTING_MENU} />
      </section>
    </div>
  );
}
