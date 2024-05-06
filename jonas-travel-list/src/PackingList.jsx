import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function PackingList({ items }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}
