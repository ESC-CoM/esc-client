import $ from './style.module.scss';

type Props = {
  text: string;
};

export default function Badge({ text }: Props) {
  return <span className={$.badge}>{text}</span>;
}
