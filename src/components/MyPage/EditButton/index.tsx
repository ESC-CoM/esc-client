import { GrNext } from 'react-icons/gr';
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
      <GrNext className={$.icon} />
    </button>
  );
}
