import { AiOutlineMan } from '@react-icons/all-files/ai/AiOutlineMan';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import {
  MOCK_BASIC_INFORMATION,
  MOCK_BODY_DATA,
  MOCK_URL,
} from 'src/__mocks__/mypageMocks';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';

import InformationBar from '../InformationBar';
import $ from './style.module.scss';

type Prop = {
  className: string;
};

export default function MyInformationCard({ className }: Prop) {
  return (
    <Link className={cx($.container, className)} to="./change/additional-info">
      <div className={$['left-box']}>
        <div className={$['profile-image-container']}>
          <PersonalProfileImage
            alt="프로필"
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
    </Link>
  );
}
