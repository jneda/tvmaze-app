import ShowInfo from "./ShowInfo";

export default function Results(props) {
  const { length, shows } = props.results;
  const results = shows.map((show) => (
    // <pre key={result.id}>{JSON.stringify(result)}</pre>
    <ShowInfo key={show.show.id} data={show} />
  ));

  return <div>
    <h1>{length} résultat{length > 1 ? "s" : ""} pour &laquo; {props.query} &raquo;</h1>
    {results}
    </div>;
}
