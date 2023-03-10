import { useState } from "react";

// utils
import { getShows } from "./lib/tmazeApi";

// components
import Results from "./components/Results";
import RickRoll from "./components/RickRoll";
import Searchbar from "./components/Searchbar";
import Title from "./components/Title";
import Footer from "./components/Footer";

// css
import "./App.css";
import Header from "./components/Header";

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
      <Header />
      {/* <Title title={"Bonjour tout le monde ! 📺"} /> */}
      <Searchbar onSearch={onSearch} />
      {shows.length === 0 ? (
        <RickRoll />
      ) : (
        <Results results={shows} query={query} />
      )}
      <Footer />
    </div>
  );
}

export default App;
