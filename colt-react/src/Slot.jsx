export default function Slot({ slot1, slot2, slot3 }) {
  const isWinner = slot1 === slot2 && slot1 === slot3;
  return (
    <div>
      <h1>
        {slot1} {slot2} {slot3}
      </h1>
      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You win!" : "You lose :("}
      </h2>
      {isWinner && <h3>Congrats</h3>}
    </div>
  );
}
