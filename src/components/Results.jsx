import ShowInfo from "./ShowInfo";

export default function Results(props) {
  const results = props.results.map((result) => (
    // <pre key={result.id}>{JSON.stringify(result)}</pre>
    <ShowInfo data={result} />
  ));

  return <div>{results}</div>;
}
