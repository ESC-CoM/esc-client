import cx from 'classnames';
import EditButton from '../EditButton';
import $ from './style.module.scss';

type Prop = {
  className: string;
};

export default function PrivateInformationCard({ className }: Prop) {
  return (
    <div className={cx(className, $.container)}>
      <ul className={$['information-title']}>
        <li>이메일</li>
        <li>비밀번호</li>
        <li>전화번호</li>
      </ul>
      <ul className={$.information}>
        <li>soonitoon@gmail.com</li>
        <li>******</li>
        <li>010-5201-9648</li>
      </ul>
      <EditButton className={$.button} />
    </div>
  );
}
