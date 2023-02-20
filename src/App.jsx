import { useState } from "react";

// utils
import { getShows } from "./lib/tmazeApi";

// components
import Results from "./components/Results";
import RickRoll from "./components/RickRoll";
import Searchbar from "./components/Searchbar";
import Title from "./components/Title";

// css
import "./App.css";

function App() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");

  async function onSearch(query) {
    setQuery(query);
    const results = await getShows(query);
    setShows(results);
  }

  return (
    <div className="App">
      <Title title={"Bonjour tout le monde ! 📺"} />
      <Searchbar onSearch={onSearch} />
      {shows.length === 0 ? <RickRoll/> : <Results results={shows} query={query} />}
    </div>
  );
}

export default App;
