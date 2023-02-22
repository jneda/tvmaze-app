import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { getPersonById } from "./lib/tmazeApi";

import Header from "./components/Header";

import "./Person.css";

export async function loader({ params }) {
  const { person, credits } = await getPersonById(params.id);
  return { person, credits };
}

export default function Person() {
  const { person, credits } = useLoaderData();
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <img src={person.image?.original} alt={person.name} />
      <h1>{person.name}</h1>
      <h2>Credits:</h2>
      <ul>
        {credits.map(credit => {
          const { show, character } = credit;
          return (
            <li key={`${show.id}-${character.id}`}><Link to={`/show/${show.id}`}><span className="show">{show.name}</span></Link>: <span className="character">{character.name}</span></li>
          );
        })

        }
      </ul>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
    </main>
  );
}
