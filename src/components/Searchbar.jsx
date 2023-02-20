import { useState } from "react";

export default function Searchbar(props) {
  console.log(props);
  const [query, setQuery] = useState("");

  console.log(query);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    props.onSearch(query);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        placeholder="Chercher une émission"
        aria-label="Chercher une émission"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>🔍</button>
    </form>
  );
}
