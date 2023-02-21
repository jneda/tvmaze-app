import DOMPurify from "dompurify";
import parse from "html-react-parser";

import { useLoaderData } from "react-router-dom";
import { getShowById } from "./lib/tmazeApi";

import "./Show.css";

export async function loader({ params }) {
  const show = await getShowById(params.id);
  return { show };
}

export default function Show() {
  const { show } = useLoaderData();
  const {
    _embedded: { cast },
  } = show;

  const sanitizedSummary = DOMPurify.sanitize(show.summary);
  const summaryElement = parse(sanitizedSummary);

  return (
    <div className="showPage">
      <image src={show.image ? show.image.original : ""} alt={show.name} />
      <h1>{show.name}</h1>
      <p>{show.type}</p>
      <p>{show.genres.join(", ")}</p>
      {summaryElement}
      <ul>
        {cast.map((entry) => {
          const { person, character } = entry;
          return (
            <li key={person.id}>
              <span>{person.name}</span> as <span>{character.name}</span>
            </li>
          );
        })}
      </ul>
    </div>

    // <pre>{JSON.stringify(show, null, 2)}</pre>
  );
}
