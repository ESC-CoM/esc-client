import style from './style.module.scss';
import { useEffect, useState } from 'react';
import cx from 'classnames';

type Props = {
  id: number;
  info: {
    name: string;
    icon: string;
  };
  selectItem: (id: number) => void;
  removeItem: (id: number) => void;
};

export default function Mock({ id, info, selectItem, removeItem }: Props) {
  const { name, icon } = info;
  const [clicked, setClicked] = useState(false);

  const clickItem = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    clicked ? selectItem(id) : removeItem(id);
  }, [clicked]);

  return (
    <div className={style.item} onClick={clickItem}>
      <span className={cx(style.icon, { [style.clicked]: clicked })}>
        {icon}
      </span>
      <span className={style.name}>{name}</span>
    </div>
  );
}
