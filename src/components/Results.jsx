import ShowInfo from "./ShowInfo";

export default function Results(props) {
  const { length, shows } = props.results;
  const results = shows.map((data) => (
    <ShowInfo key={data.show.id} data={data} />
  ));

  return (
    <div>
      <h1>
        {length} résultat{length > 1 ? "s" : ""} pour &laquo; {props.query}{" "}
        &raquo;
      </h1>
      {results}
    </div>
  );
}
