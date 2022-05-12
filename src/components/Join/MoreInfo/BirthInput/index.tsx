import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { MoreSchema } from 'src/types/join';
import { IoMdArrowDropdown } from 'react-icons/io';
import { monthList, dayList } from 'src/__mocks__/join';

interface Props {
  register: UseFormRegister<MoreSchema>;
  errors: FieldErrors<MoreSchema>;
}
export default function BirthInput({ register, errors }: Props) {
  return (
    <div className={$['item']}>
      <label htmlFor="birthDate">
        {!errors.year && !errors.month && !errors.day
          ? '생년월일'
          : '생년월일을 선택해주세요.'}
      </label>

      <div className={$['row']}>
        <input
          type="text"
          className={cx($['year'], {
            [$['error']]: errors.year,
          })}
          id="birthDate"
          placeholder="년도(4자)"
          {...register('year')}
        />

        <select
          defaultValue=""
          className={cx($['col'], {
            [$['error']]: errors.month,
          })}
          {...register('month')}
        >
          <option disabled value="">
            ---
          </option>
          {monthList.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <span className={$['drop']}>
          <IoMdArrowDropdown />
        </span>

        <select
          defaultValue=""
          className={cx($['col'], {
            [$['error']]: errors.day,
          })}
          {...register('day')}
        >
          <option disabled value="">
            ---
          </option>
          {dayList.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <span className={$['drop']}>
          <IoMdArrowDropdown />
        </span>
      </div>
    </div>
  );
}
