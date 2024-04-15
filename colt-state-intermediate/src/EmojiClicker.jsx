import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState(["😂"]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, "🙃"]);
  };

  return (
    <div>
      {emojis.map((e) => (
        <span>{e}</span>
      ))}
      <button onClick={addEmoji}>Add emoji</button>
    </div>
  );
}
