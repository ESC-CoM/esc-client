import $ from './style.module.scss';
import { useState } from 'react';
import cx from 'classnames';

const category = ['등록한 미팅', '신청한 미팅', '매칭된 미팅'];

export default function Category() {
  const [isCategoryActive, setIsCategoryActive] = useState<boolean[]>([
    true,
    false,
    false,
  ]);

  return (
    <nav className={$['category-nav']}>
      <ul className={$['tab-list']}>
        {category.map((name, index1) => (
          <li
            className={cx($['tab-item'], {
              [$['item-active']]: isCategoryActive[index1],
            })}
            onClick={() =>
              setIsCategoryActive(
                isCategoryActive.map((_, index2) =>
                  index1 === index2 ? true : false
                )
              )
            }
          >
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
