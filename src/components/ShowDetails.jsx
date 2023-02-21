import { Link } from "react-router-dom";

import DOMPurify from "dompurify";
import parse from "html-react-parser";

export default function ShowDetails(props) {
  const { show, cast } = props;

  const sanitizedSummary = DOMPurify.sanitize(show.summary);
  const summaryElement = parse(sanitizedSummary);

  return (
    <div className="showPage">
      <image src={show.image ? show.image.original : ""} alt={show.name} />
      <h1>{show.name}</h1>
      <p>Type: {show.type}</p>
      <p>Genre: {show.genres.join(", ")}</p>
      {summaryElement}
      <ul>
        {cast.map((entry) => {
          const { person, character } = entry;
          return (
            <li key={person.id}>
              <span>{person.name}</span> as{" "}
              <span className="character">{character.name}</span>
            </li>
          );
        })}
      </ul>
      <Link to={"/"}>Back</Link>
    </div>
  );
}
