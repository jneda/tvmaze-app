import "./Person.css";

export default function Person(props) {
  const { person, character } = props.data;
  return (
    <article className="personDetails">
      <img src={person.image?.medium} alt={person.name} />
      <span className="infos">
        <span className="person">{person.name}</span>&nbsp;as&nbsp;
        <span className="character">{character.name}</span>
      </span>
    </article>
  );
}
