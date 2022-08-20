import { IoIosArrowForward } from 'react-icons/io';
import $ from './style.module.scss';

type Prop = {
  className: string;
};

export default function EditButton({ className }: Prop) {
  return (
    <button
      className={className}
      type="button"
      aria-label="프로필 정보 상세보기"
    >
      <IoIosArrowForward className={$.icon} />
    </button>
  );
}
