export default function ColorList({ colors }) {
  return (
    <div>
      <p>Color list</p>
      <p>
        {colors.map((c) => (
          <li style={{ color: c }}>{c}</li>
        ))}
      </p>
    </div>
  );
}
