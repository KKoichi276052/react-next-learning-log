export default function PropertiesListItem({ name, rating, price }) {
  return (
    <li style={{ textAlign: "center", maxWidth: "200px" }}>
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h4>{rating} ⭐️</h4>
    </li>
  );
}
