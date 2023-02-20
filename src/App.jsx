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

  async function onSearch(query) {
    const results = await getShows(query);
    console.table(results);
    setShows(results.shows);
  }

  return (
    <div className="App">
      <Title title={"Bonjour tout le monde ! 📺"} />
      <Searchbar onSearch={onSearch} />
      {shows.length === 0 ? <RickRoll/> : <Results results={shows} />}
    </div>
  );
}

export default App;
