import $ from './style.module.scss';

type Props = {
  text: string;
};

export default function Badge({ text }: Props) {
  return <strong className={$.badge}>{text}</strong>;
}
