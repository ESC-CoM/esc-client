import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { MoreSchema } from 'src/types/join';
import { monthList, dayList } from 'src/__mocks__/join';

interface Props {
  register: UseFormRegister<MoreSchema>;
  errors: FieldErrors<MoreSchema>;
}
export default function BirthInput({ register, errors }: Props) {
  return (
    <div className={$['item']}>
      <label htmlFor="birthDate">
        {(errors.year?.message ||
          errors.month?.message ||
          errors.day?.message) ??
          '생년월일'}
      </label>

      <div className={$['row']}>
        <span
          className={cx($[''], {
            [$['error']]: errors.year,
          })}
        >
          <input
            type="text"
            id="birthDate"
            placeholder="년도(4자)"
            {...register('year')}
          />
        </span>

        <span
          className={cx($[''], {
            [$['error']]: errors.month,
          })}
        >
          <select defaultValue="" {...register('month')}>
            <option disabled value="">
              ---
            </option>
            {monthList.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </span>

        <span
          className={cx($[''], {
            [$['error']]: errors.day,
          })}
        >
          <select defaultValue="" {...register('day')}>
            <option disabled value="">
              ---
            </option>
            {dayList.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </span>
      </div>
    </div>
  );
}
