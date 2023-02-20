export default function ShowInfo(props) {
  const { score, show } = props.data;
  const { name, summary } = show;

  return (
    <article>
      <h2>{name}</h2>
      {summary}
    </article>
  );
}
