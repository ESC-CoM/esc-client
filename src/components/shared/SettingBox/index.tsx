import $ from './style.module.scss';
import { Menu } from 'src/types/setting';
import Container from './Container';
import getBarClassName from 'src/utils/getBarClassName';
import cx from 'classnames';

type Props = {
  className?: string;
  menu: Menu[];
};

export default function SettingBox({ className, menu }: Props) {
  return (
    <ul className={cx($.container, className)}>
      {menu.map(({ title, items }) => (
        <li key={title}>
          <h2 className={$.title}>{title}</h2>
          <ul>
            {items.map((item, index) => {
              const barClassName = getBarClassName(index, items.length);
              return (
                <Container
                  key={item.text}
                  item={item}
                  className={$[barClassName]}
                />
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}
