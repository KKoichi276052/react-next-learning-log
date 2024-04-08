export default function Greeter({ name = "everyone", from = "friend" }) {
  return (
    <>
      <h1>HI There!, {name}</h1>
      <h2>from, {from}</h2>
    </>
  );
}
