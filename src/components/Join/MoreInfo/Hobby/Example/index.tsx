import $ from './style.module.scss';
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

export default function Example({ id, info, selectItem, removeItem }: Props) {
  const { name, icon } = info;
  const [clicked, setClicked] = useState(false);

  const clickItem = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    clicked ? selectItem(id) : removeItem(id);
  }, [clicked]);

  return (
    <div className={$['item']} onClick={clickItem}>
      <span className={cx($['icon'], { [$['clicked']]: clicked })}>{icon}</span>
      <span className={$['name']}>{name}</span>
    </div>
  );
}
