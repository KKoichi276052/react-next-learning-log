import { useState } from "react";
import { v4 as uuid } from "uuid";

const randomEmoji = () => {
  const choices = ["🤓", "🙂‍↕️", "🥳"];
  return choices[Math.floor(Math.random() * choices.length)];
};

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      // make copy of state
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };

  return (
    <div>
      {emojis.map((e) => (
        <span onClick={() => deleteEmoji(e.id)} key={e.id}>
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add emoji</button>
    </div>
  );
}
