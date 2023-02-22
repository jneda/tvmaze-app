import { Link, useNavigate } from "react-router-dom";

import DOMPurify from "dompurify";
import parse from "html-react-parser";

import Person from "./Person";

import "./ShowDetails.css";

export default function ShowDetails(props) {
  const { show, cast } = props;
  const navigate = useNavigate();

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
      <ul className="showInfo">
        <span className="label">Cast: </span>{" "}
        {cast.map((entry) => {
          const { person, character } = entry;
          return (
            <li key={person.id}>
              <Link to={`/person/${person.id}`}>
                <Person data={{ person, character }} />
              </Link>
            </li>
          );
        })}
      </ul>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
    </div>
  );
}
