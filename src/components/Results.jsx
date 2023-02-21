import { Link } from "react-router-dom";
import ShowInfo from "./ShowInfo";

export default function Results(props) {
  const { length, shows } = props.results;
  const results = shows.map((show) => (
    // <pre key={result.id}>{JSON.stringify(result)}</pre>
    <Link key={show.show.id} to={`/show/${show.show.id}`}>
      <ShowInfo data={show} />
    </Link>
  ));

  return (
    <div className="results">
      <h1>
        {length} résultat{length > 1 ? "s" : ""} pour &laquo; {props.query}{" "}
        &raquo;
      </h1>
      {results}
    </div>
  );
}
