import Button from '../Button';
import $ from './style.module.scss';

interface Props {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  buttonText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function ImageUploadButton({
  inputRef,
  buttonText,
  onChange,
  onClick,
}: Props) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e);

  const handleClickButton = () => onClick();

  return (
    <label htmlFor="input-file" className={$['file-label']}>
      <input
        className={$['input-file']}
        type="file"
        ref={inputRef}
        onChange={handleChangeInput}
        accept="image/*"
        id="input-file"
      />
      <Button
        width="100px"
        contentText={buttonText}
        onClick={handleClickButton}
      />
    </label>
  );
}
