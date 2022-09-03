import { Item } from 'src/types/setting';
import LinkBar from '../LinkBar';
import ToggleBar from '../ToggleBar';
import $ from './style.module.scss';

type Props = {
  className: string;
  item: Item;
};

export default function SettingContainer({ className, item }: Props) {
  return (
    <li key={item.text} className={className}>
      {item.type === 'link' ? (
        <LinkBar to={item.to} text={item.text} />
      ) : (
        <ToggleBar text={item.text} value={item.value} onClick={item.onClick} />
      )}
    </li>
  );
}
