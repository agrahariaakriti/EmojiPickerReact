import styles from "./EmojiDisplayer.module.css";
function EmojiDisplayer({ emoji, index, handleMyState }) {
  return (
    <div
      onClick={() => {
        handleMyState(index);
      }}
      className={styles.emojiDisplayBox}
    >
      {emoji}
    </div>
  );
}
export default EmojiDisplayer;
