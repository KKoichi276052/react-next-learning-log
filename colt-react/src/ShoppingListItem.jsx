export default function ShoppingListItem({ item, quantity, completed }) {
  const styles = { color: completed ? "grey" : "red" };
  return (
    <li style={styles}>
      {item} - {quantity}
    </li>
  );
}
