import cx from 'classnames';
import { AiOutlineMan } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import $ from './style.module.scss';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';
import InformationBar from '../InformationBar';
import {
  MOCK_BASIC_INFORMATION,
  MOCK_BODY_DATA,
  MOCK_URL,
} from 'src/__mocks__/mypageMocks';

type Prop = {
  className: string;
};

export default function MyInformationCard({ className }: Prop) {
  return (
    <div className={cx($.container, className)}>
      <div className={$['left-box']}>
        <div className={$['profile-image-container']}>
          <PersonalProfileImage
            alt={''}
            src={MOCK_URL}
            width={60}
            height={60}
          />
          <span className={$.mbti}>INFP</span>
        </div>
        <div className={$['information-container']}>
          <div className={$['name-container']}>
            <em className={$.name}>최현오</em>
            <AiOutlineMan className={$.icon} />
          </div>
          <ul>
            {MOCK_BASIC_INFORMATION.map(({ icon, text }) => (
              <InformationBar key={text} {...{ icon, text }} />
            ))}
          </ul>
          <ul className={$['body-information']}>
            {MOCK_BODY_DATA.map(({ icon, text }) => (
              <InformationBar
                key={text}
                className={$.item}
                {...{ icon, text }}
              />
            ))}
          </ul>
        </div>
      </div>
      <IoIosArrowForward className={$.button} />
    </div>
  );
}
