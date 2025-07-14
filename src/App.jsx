import "./index.css";
import { useState } from "react";
import DisplayBox from "./Component/DisplayBox";
import EmojiSingleItem from "./Component/EmojiSingleItem";
import "./App.css";
function App() {
  const emojiList = [
    "😊", // Smiling face with smiling eyes – calm happiness
    "🥰", // Smiling face with hearts – affection, love
    "😐", // Neutral face – feeling okay or uninterested
    "🙄", // Face with rolling eyes – sarcasm, irritation
    "😇", // Smiling face with halo – innocence, good vibes
    "😤", // Face with steam from nose – determination, frustration
    "😴", // Sleeping face – tired, sleepy
    "😬", // Grimacing face – awkward, nervous
    "🤗", // Hugging face – comfort, warmth
    "😮‍💨", // Face exhaling – relief or exhaustion
    "🥶", // Cold face – freezing, shocked, feeling numb
    "🥵", // Hot face – overwhelmed, too much to handle
    "😶", // Face without mouth – speechless
    "🤤", // Drooling face – craving, admiration
    "🤓", // Nerd face – geeky, smart moment
    "😜", // Winking face with tongue – playfulness
    "🤬", // Face with symbols on mouth – censored anger
    "🤫", // Shushing face – keeping quiet, secret
    "🤥", // Lying face – dishonesty, teasing
    "🤩", // Star-struck – amazement, admiration
  ];

  const emojiSentences = [
    "😊 That peaceful smile says you're glowing from within — keep radiating calm energy!",
    "🥰 You're surrounded by love — and your warmth makes the world better!",
    "😐 Even when you're neutral, your presence adds balance — you're strong in your own quiet way!",
    "🙄 You're not afraid to roll your eyes — and sometimes, that’s the confidence we all need!",
    "😇 Your kindness and good vibes are your superpowers — stay angelic!",
    "😤 That fire inside you is fierce — channel it and conquer anything!",
    "😴 Rest is powerful — you deserve every bit of it to rise stronger!",
    "😬 Feeling awkward? That's part of growth — you're learning, and that's awesome!",
    "🤗 Your hugs — even virtual ones — are the warmest comfort someone needs today!",
    "😮‍💨 You made it through — take that deep breath, you've earned peace!",
    "🥶 Even in the coldest moments, you’re holding on — you’re resilient and brave!",
    "🥵 Things may feel heavy now, but you’re tougher than any pressure!",
    "😶 Words may fail, but your heart speaks loudly — your silence is still powerful.",
    "🤤 That craving? Go for it — treat yourself, you deserve joy!",
    "🤓 Smart is stylish — wear your brain like a crown!",
    "😜 Your playful side is electric — keep being the sparkle in the room!",
    "🤬 You're fired up — use that fire to stand tall and speak truth!",
    "🤫 You hold secrets like treasures — your trustworthiness is rare and beautiful!",
    "🤥 A little joke never hurt — your humor makes even fibs feel fun!",
    "🤩 You're shining with excitement — keep chasing your passions, they light you up!",
  ];

  let [initialValueOfEmoji, changeStateOfEmoji] = useState("");
  const handleMyState = (index) => {
    console.log(`helloo ${initialValueOfEmoji}`);
    changeStateOfEmoji(emojiSentences[index]);
  };

  return (
    <div className="main_container">
      <div className="headingContainer">
        <h1>Emoji Picker</h1>
      </div>
      <div className="Display">
        <EmojiSingleItem emojiList={emojiList} handleMyState={handleMyState} />
      </div>
      <div className="container">
        <DisplayBox val={initialValueOfEmoji} />
      </div>
    </div>
  );
}
export default App;
