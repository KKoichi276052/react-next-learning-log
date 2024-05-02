const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function PackingList() {
  return (
    <ul className="list">
      {initialItems.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.description}</p>
            <p>{item.qunatity}</p>
            <p>{item.packed}</p>
          </li>
        );
      })}
    </ul>
  );
}
