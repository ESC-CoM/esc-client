import { memo, useRef } from 'react';
import { RiArrowDownSFill } from '@react-icons/all-files/ri/RiArrowDownSFill';
import cx from 'classnames';
import { DefaultData, StyleProps } from 'src/types/props';

import $ from './style.module.scss';
import useSelect from './useSelect';
import { getLabelNameByProp } from './utils';

type Props = {
  options: DefaultData[];
  selected: string | number;
  onChange?: (value: string) => void;
  name: string;
  width?: string;
  height?: string;
  fontWeight?: number;
  fontSize?: number;
} & StyleProps;

function SelectBox(selectProps: Props) {
  const { options, selected, onChange } = selectProps;
  const { name, width, height, fontWeight, fontSize, className } = selectProps;

  const labelRef = useRef<HTMLButtonElement>(null);
  const [isClicked, setIsClicked] = useSelect(labelRef);
  const labelName = getLabelNameByProp(options, selected, 'code');
  const isSelected = (optionName: string) => labelName === optionName;

  const handleMouseDown = (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    e.preventDefault();
    setIsClicked((clicked) => !clicked);
  };

  const handleSelectItem = (
    e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
    option: string
  ) => {
    if (onChange) onChange(option);
    setIsClicked(false);
  };

  return (
    <div
      className={cx($['select-box'], className, {
        [$['select-box-clicked']]: isClicked,
      })}
      style={{ ...{ width, height } }}
    >
      <button
        id={`${name}-select-box`}
        ref={labelRef}
        type="button"
        aria-haspopup="true"
        aria-expanded="true"
        aria-controls={`${name}-select-list`}
        onClick={handleMouseDown}
      >
        <span
          style={{
            fontSize: `${fontSize || 14}px`,
            fontWeight: `${fontWeight || 600}`,
          }}
        >
          {labelName || '선택'}
        </span>

        <RiArrowDownSFill
          className={cx($.arrow, {
            [$['arrow-clicked']]: isClicked,
          })}
        />
      </button>

      {isClicked && (
        <ul
          id={`${name}-select-list`}
          aria-labelledby={`${name}-select-box`}
          role="menu"
          tabIndex={0}
          style={{ top: height ? `calc(${height} + 6px)` : '36px' }}
          className={cx($['select-wrapper'], {
            [$['select-wrapper-clicked']]: isClicked,
          })}
        >
          {options.map((option) => {
            const optionName = option.name;
            const optionData = option.code;

            return (
              <li
                tabIndex={0}
                role="menuitem"
                key={optionName}
                style={{ height }}
                className={cx($['select-item'], {
                  [$['select-item-clicked']]: isSelected(optionName),
                })}
                onClick={(e) => handleSelectItem(e, optionData)}
                onKeyDown={(e) => handleSelectItem(e, optionData)}
              >
                <span
                  style={{
                    fontSize: `${fontSize}px`,
                    fontWeight,
                  }}
                >
                  {optionName}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default memo(SelectBox);
