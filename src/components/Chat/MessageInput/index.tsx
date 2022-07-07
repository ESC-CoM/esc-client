import $ from './style.module.scss';

export default function MessageInput() {
  return (
    <div className={$['message-input-box']}>
      <button type="button">+</button>
      <div className={$.text}>
        <textarea name="message" id=""></textarea>
      </div>
      <button type="submit">전송</button>
    </div>
  );
}
