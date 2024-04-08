export default function ListPicker({ values }) {
  const randIdx = Math.floor(Math.random() * values.length);
  const randEl = values[randIdx];

  return (
    <>
      <h1>The list of values, {values}</h1>
      <p>Random element is: {randEl}</p>
    </>
  );
}
