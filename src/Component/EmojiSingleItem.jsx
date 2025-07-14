import EmojiDisplayer from "./EmojiDisplayer";
function EmojiSingleItem({ emojiList, handleMyState }) {
  return (
    <>
      {emojiList.map((emoji, index) => (
        <EmojiDisplayer
          emoji={emoji}
          index={index}
          key={emoji + index}
          handleMyState={handleMyState}
        />
      ))}
    </>
  );
}
export default EmojiSingleItem;
