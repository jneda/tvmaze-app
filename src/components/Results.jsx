import ShowInfo from "./ShowInfo";

export default function Results(props) {
  const { length, shows } = props.results;
<<<<<<< HEAD
  const results = shows.map((show) => (
    // <pre key={result.id}>{JSON.stringify(result)}</pre>
    <ShowInfo key={show.show.id} data={show} />
=======
  const results = shows.map((data) => (
    <ShowInfo key={data.show.id} data={data} />
>>>>>>> 2ee13b968e6e791a9a6b3a1d32b7cf274428e059
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
