import { useLoaderData } from "react-router-dom";
import { getShowById } from "./lib/tmazeApi";

import ShowDetails from "./components/ShowDetails";

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

  return (
    <ShowDetails show={show} cast={cast} />
    // <pre>{JSON.stringify(show, null, 2)}</pre>
  );
}
