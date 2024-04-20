import { useState } from "react";

export default function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(term);
    setTerm("");
  };

  return (
    <form onClick={handleSubmit}>
      <input type="text" name="" id="" onChange={handleChange} />
      <button>Search!!!</button>
    </form>
  );
}
