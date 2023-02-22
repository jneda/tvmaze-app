import { Link } from "react-router-dom";

import DOMPurify from "dompurify";
import parse from "html-react-parser";

import "./ShowDetails.css";

export default function ShowDetails(props) {
  const { show, cast } = props;

  const sanitizedSummary = DOMPurify.sanitize(show.summary);
  const summaryElement = parse(sanitizedSummary);

  return (
    <div className="showPage">
      <img src={show.image ? show.image.original : ""} alt={show.name} />
      <h1>{show.name}</h1>
      <p className="showInfo">
        <span className="label">Type:</span> {show.type}
      </p>
      <p className="showInfo">
        <span className="label">Genre:</span> {show.genres.join(", ")}
      </p>
      <p className="showInfo">
        <span className="label">Summary:</span> {summaryElement}
      </p>
      <p className="showInfo">
        <span className="label">Cast: </span>{" "}
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
      </p>
      <Link to={"/"}>&larr; Back</Link>
    </div>
  );
}
