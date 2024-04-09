import PropertiesListItem from "./PropertiesListItem";

export default function PropertiesList({ items }) {
  const styles = {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    gap: "16px",
    padding: "0",
    // marginInline: "auto",
  };

  return (
    <ul style={styles}>
      {items.map((i) => (
        <PropertiesListItem key={i.id} {...i} />
      ))}
    </ul>
  );
}
